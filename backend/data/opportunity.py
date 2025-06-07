from dataclasses import dataclass

@dataclass
class Opportunity:
    id: int
    title: str
    description: str
    status: str 
    potentialValue: float
    dueDate: str
    nextSteps: str