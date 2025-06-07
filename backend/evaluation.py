from openai import OpenAI
import logging
from dotenv import load_dotenv
from pydantic import BaseModel

logger = logging.getLogger("evaluation-LLM")
logger.setLevel(logging.INFO)
load_dotenv()
client = OpenAI()


class PortfolioAnalysis(BaseModel):
    asset_class: str
    summary: str
    
    
def llm_investments_evaluation(prompt: str) -> str:
    """
    Calls OpenAI's GPT model asynchronously and returns the response text.
    """
    try:
        response = client.chat.completions.create(
            model="gpt-4.1",
            messages=[
                {"role": "system", "content": "You are a helpful assistant for investment recommendations."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=256,
            temperature=0.2,
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        logger.error(f"OpenAI API call failed: {e}")
        return "Sorry, I couldn't process the evaluation at this time."

