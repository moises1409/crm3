from dataclasses import dataclass
from .investmentIdea import InvestmentIdea
from typing import Optional

@dataclass
class RecommendIdeas:
    idea: InvestmentIdea
    evaluation: str
    added: bool = False
    percentOfPortfolio: Optional[float] = None
