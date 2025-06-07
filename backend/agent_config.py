import asyncio
from agents import Agent, Runner, handoff, trace, TResponseInputItem, ModelSettings, function_tool, RunContextWrapper
from agents.agent import StopAtTools
from dataclasses import asdict
from embeddings import search_recommended_ideas
from evaluation import llm_investments_evaluation

from data.portfolio import Portfolio, Position, Weight_AssetBreakdown
from data.investmentIdea import InvestmentIdea
from data.client_preferences import InvestmentPreferences
from data.recommend_ideas import RecommendIdeas

from data.contact import Contact
from data.activity import Activity
from data.goal import Goal
from data.opportunity import Opportunity
from data.task import Task
from data.family import Family

from dataclasses import asdict
from agents.extensions.handoff_prompt import RECOMMENDED_PROMPT_PREFIX
from pydantic import BaseModel
from typing import List
import json
import copy

class PortfolioAgentContext(BaseModel):
    portfolio: Portfolio | None = None
    benchmark: Portfolio | None = None
    portfolio_analysis: str | None = None
    asset_class_analysis: str | None = None
    investment_ideas: List[InvestmentIdea] | None = None
    investment_preferences: InvestmentPreferences | None = None
    recommended_ideas: List[RecommendIdeas] | None = None
    recommend_position_tosell: List [Position] | None = None

def get_underweighted_asset_classes(
    client: Portfolio,
    benchmark: Portfolio
) -> List[str]:
    # build lookup maps
    client_w = { w.asset_class: w.percentage
                 for w in client.weight_assets_breakdown or [] }
    bench_w  = { w.asset_class: w.percentage
                 for w in benchmark.weight_assets_breakdown or [] }

    # any asset where client % < benchmark %
    under = [
        asset
        for asset, bpct in bench_w.items()
        if client_w.get(asset, 0.0) < bpct
    ]
    assets = ', '.join(under)
    return f"The asset class to align with benchmark are: {assets}"

@function_tool
async def search_investment_ideas(context: RunContextWrapper[PortfolioAgentContext], user_preferences: str):
    """
    Search for investment ideas based on user preferences and portfolio analysis and evaluate them using LLM.

    Args:
        user_preferences: str - The preferences of the user for investment ideas. It could be empty
    """
    ideas = context.context.investment_ideas
    analysis = context.context.portfolio_analysis
    asset_analysis = context.context.asset_class_analysis
    if user_preferences:
        context.context.investment_preferences.activity_notes = user_preferences
        preferences = user_preferences
        pre_prompt = (
            f"Client preferences: {preferences}. "
            f"Client suitability: {context.context.investment_preferences.suitability}."
        )
    else:
        preferences = f"{context.context.investment_preferences.activity_notes} and {asset_analysis}"
        pre_prompt = (
            f"Client preferences: {preferences}. "
            f"Client constraint: {context.context.investment_preferences.constraint}."
            f"Client suitability: {context.context.investment_preferences.suitability}."
            f"Portfolio analysis: {analysis}\n"
        )
    
    print(f"analysis: {analysis}")
    print(f"user_preferences: {user_preferences}")
    print(f"asset_analysis: {asset_analysis}")
    print(f"preferences: {preferences}")
    print(f"preprompt: {pre_prompt}")

    recommendations = search_recommended_ideas(preferences, ideas)
    final_recommendations = []
    for idea in recommendations:
        prompt = (
            f"{pre_prompt}"
            f"Investment idea: {idea.to_string()}\n"
            "Is this investment idea a good fit? "
            "Reply with 'yes' or 'no' and a short explanation."
        )
        evaluation = llm_investments_evaluation(prompt)
        print(f"Evaluation: {evaluation}")
        if evaluation.strip().lower().startswith("yes"):
            idea_dict = asdict(idea) if hasattr(idea, '__dataclass_fields__') else idea.__dict__
            final_recommendations.append({
                "idea": idea_dict,
                "llm_evaluation": evaluation
            })
    next_actions = ["Recommend positions to sell", "Simulate orders in portfolio"]
    context.context.recommended_ideas = final_recommendations
    preferences = context.context.investment_preferences
    payload = {
            "action": "showInvestmentRecommendations",
            "recommendations": final_recommendations,
            "preferences": asdict(preferences) if preferences else None,
            "answer": "Here are the investement ideas that best fit with your client situation.",
            "next_action": next_actions
        }
    #payload=json.dumps(payload, default=lambda o: o.__dict__),
    return payload

@function_tool
async def recommend_position_tosell(context: RunContextWrapper[PortfolioAgentContext]):
    """
    Recommend the best positions in client portfolio to sell
    """
    positions_tosell= context.context.portfolio.positions
    context.context.recommend_position_tosell = positions_tosell
    next_actions = ["Simulate orders in portfolio", "schedule meeting"]
    payload = {
            "action": "showPositionsToSell",
            "answer": "Here are the recommended positions to sell in client portfolio",
            "positions_to_sell": [asdict(pos) for pos in positions_tosell] if positions_tosell else None,
            "next_action": next_actions
        }
    
    return payload

@function_tool
async def simulate_portfolio(context: RunContextWrapper[PortfolioAgentContext]):
    """
    Simulate orders in client portfolio
    """
    simulation = copy.deepcopy(context.context.portfolio)
    
    simulation.weight_assets_breakdown = [
        Weight_AssetBreakdown(asset_class="Cash", percentage=1),
        Weight_AssetBreakdown(asset_class="Bonds", percentage=29),
        Weight_AssetBreakdown(asset_class="Equities", percentage=47),
        Weight_AssetBreakdown(asset_class="Commodities", percentage=3),
        Weight_AssetBreakdown(asset_class="Hedge Fund", percentage=3),
        Weight_AssetBreakdown(asset_class="Real Estate", percentage=17),
    ]

    portfolio = context.context.portfolio
    benchmark = context.context.benchmark
    orders_buy = context.context.recommended_ideas
    orders_sell = context.context.recommend_position_tosell
    next_actions = ["Generate investment proposal", "schedule meeting"]
    
    payload = {
            "action": "showPortfolioSimulation",
            "answer": "Here the simulation of the client portfolio with the orders selected",
            "portfolio": asdict(portfolio) if portfolio else None,
            "benchmark": asdict(benchmark) if benchmark else None,
            "simulation": asdict(simulation) if simulation else None,
            "orders_buy": orders_buy,
            "orders_sell": [asdict(pos) for pos in orders_sell] if orders_sell else None,
            "next_action": next_actions
    }
    
    
    return payload

@function_tool
async def analyze_portfolio(context: RunContextWrapper[PortfolioAgentContext]):
    """
    Analyze the client's portfolio and update the context with asset breakdown.
    """
    portfolio_str = context.context.portfolio.to_string()
    benchmark_str = context.context.benchmark.to_string()
    portfolio = context.context.portfolio
    benchmark = context.context.benchmark

    under = get_underweighted_asset_classes(portfolio, benchmark)
    #print("Underweighted asset classes:", under)

    next_actions = []
    
    if portfolio and benchmark:
       
        prompt = f"""
                # INSTRUCTIONS
                You are an expert in investment analysis. Your task is to analyze the client's portfolio and compare it to a benchmark.
                Here is the client portfolio:
                {portfolio_str}

                Compare this portfolio to the following benchmark:
                {benchmark_str}

                # OBJECTIVE
                Your objective is to provide a short summary, maximum 3 sentences of the analysis following the schema provided. It should include:
                - If the portfolio is overweight or underweight in asset class compared to the benchmark. Please only indicate when difference is important.
                - If there is a risk of concentration in industry or currency based on weights in client porfolio. In case of industry should not compare with benchmark.
                - If the portfolio is performing better or worse than the benchmark and identify the causes based on the asset class performances
            """            
        summary = llm_investments_evaluation(prompt)
        context.context.portfolio_analysis = summary
        context.context.asset_class_analysis = under
        next_actions = ["Recommend investment ideas", "Recommend positions to sell"]
       
    
    payload = {
        "action": "showPortfolioAnalysis",
        "answer": summary,
        "portfolio": asdict(portfolio) if portfolio else None,
        "benchmark": asdict(benchmark) if benchmark else None,
        "next_action": next_actions
    }
    
    return payload

investment_instructions = f"""
    {RECOMMENDED_PROMPT_PREFIX}
    # IDENTITY
    You are an expert in investments recommendations

    # OBJECTIVE
    Help the user to find the best investment idea that fits with his needs or the best position to sell in client portfolio. 
    
    # Routine
    In case the user preferences are not provided, you dont need to ask the user, you pass an empty string to the tool
    Use the search investment ideas tool to recommend the best ideas.
    Use the recommend position to sell tool to recommend positions to sell in client portfolio.
    If the customer asks a question that is not related to the routine, transfer back to the triage agent. 
    """

investment_agent = Agent[PortfolioAgentContext](
    name="Recommend investment ideas",
    handoff_description="A helpful agent that can recommend investment ideas or positions to sell.",
    instructions=investment_instructions,
    tools=[search_investment_ideas, recommend_position_tosell],
    tool_use_behavior=StopAtTools(stop_at_tool_names=["search_investment_ideas", "recommend_position_tosell"]),
    model_settings=ModelSettings(
        temperature=0.2,
        tool_choice="required",
        parallel_tool_calls=False,
    )
)


analysis_instructions = f"""
    {RECOMMENDED_PROMPT_PREFIX}
    # IDENTITY
    You are an expert in investment analysis and simulations. 
    Your task is to analyze the client's portfolio or to simulate orders in client portfolio

    # OBJECTIVE
    Help the user to explain the situation of the client portfolio or simulate orders in client portfolio. 

    # Routine
    Use the analysis portfolio tool to analyze client portfolio and compare to benchmark.
    Use the simulation portfolio tool to simulate orders in client portfolio.
    If the customer asks a question that is not related to the routine, transfer back to the triage agent. 
    
    """
analysis_agent = Agent[PortfolioAgentContext](
    name="Analysis of client portfolio",
    instructions=analysis_instructions,
    tools=[analyze_portfolio, simulate_portfolio],
    tool_use_behavior=StopAtTools(stop_at_tool_names=["analyze_portfolio", "simulate_portfolio"]),
    model_settings=ModelSettings(
        temperature=0.2,
        tool_choice="required",
        parallel_tool_calls=False,
    )
)


triage_instructions = (
        f"{RECOMMENDED_PROMPT_PREFIX}"
        "You are a helpful triaging agent. You can use your tools to delegate questions to other appropriate agents."
        "Delegate to investment_agent when the user ask to recommend investments ideas or recommend sell positions."
        "Delegate to analysis_agent when the user ask to analyze portfolio or simulate orders."
)

triage_agent = Agent[PortfolioAgentContext](
    name="Triage agent",
    handoff_description="A triage agent that can delegate a customer's request to the appropriate agent.",
    instructions=triage_instructions,
    handoffs=[investment_agent, handoff(analysis_agent)]
)

def run_agent_sync(user_input, context):
    input_items = [{"content": user_input, "role": "user"}]
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    #context = PortfolioAgentContext(portfolio=portfolio_data, benchmark=benchmark_data, investment_ideas=investment_ideas, investment_preferences=client_preferences_data)  # Pass initial portfolio
    with trace("Chat investments"):
        try:
            result = loop.run_until_complete(Runner.run(triage_agent, input=input_items, context=context))
        except Exception as e:
            print({"error": str(e)}), 500
    return result.final_output, context