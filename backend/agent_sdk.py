from flask import Flask, request, jsonify
from dotenv import load_dotenv
from flask_cors import CORS
from openai import OpenAI
from agent_config import run_agent_sync, PortfolioAgentContext
import json
import ast
from data.investmentIdea_data import investment_ideas
from data.client_portfolio_data import portfolio_data
from data.benchmark_portfolio_data import benchmark_data
from data.client_preferences_data import client_preferences_data
from data.contact_data import contacts

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
client = OpenAI()

CONTEXT_STORE = {}

@app.route("/agent", methods=["POST"])
def recommend():
    data = request.get_json()
    message = data.get("message")
    session_id = data.get("session_id")

    if not message:
        return jsonify({"error": "Missing user message"}), 400
    if not session_id:
        return jsonify({"error": "Missing session_id"}), 400
    
    context = CONTEXT_STORE.get(session_id)
    if context is None:
        context = PortfolioAgentContext(
            portfolio=portfolio_data,
            benchmark=benchmark_data,
            investment_ideas=investment_ideas,
            investment_preferences=client_preferences_data
        )
    try:
        output, updated_context = run_agent_sync(message, context)
        CONTEXT_STORE[session_id] = updated_context

        if isinstance(output, str):
            output = output.strip() 
            # Only try to parse if it looks like a dict
            if output.startswith("{") and output.endswith("}"):
                try:
                    output = ast.literal_eval(output)
                except Exception:
                    output = json.loads(output)
            else:
                # Return a generic error or wrap the string in a JSON object
                return jsonify({"answer": output}), 200
        return jsonify(output)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/contact", methods=["GET"])
def get_contact():
    return jsonify(contacts[0])

if __name__ == "__main__":
    app.run(debug=True)