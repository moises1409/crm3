from dataclasses import dataclass, field
from typing import List
from .activity import Activity
from .goal import Goal
from .opportunity import Opportunity
from .task import Task
from .risk import Risk
from .family import Family

@dataclass
class Contact:
    firstName: str
    lastName: str
    country: str
    totalAum: str
    clientSegment: str
    contactType: str
    last_interaction: str
    profitability: float
    performance: float
    category: str
    investment_preferences: str
    activities: List[Activity] = field(default_factory=list)
    goals: List[Goal] = field(default_factory=list)
    opportunities: List[Opportunity] = field(default_factory=list)
    tasks: List[Task] = field(default_factory=list)
    risks: List[Risk] = field(default_factory=list)
    family: List[Family] = field(default_factory=list)