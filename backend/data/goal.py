from dataclasses import dataclass

@dataclass
class Goal:
    id: int
    name: str
    status: str
    targetAmount: float
    currentAmount: float
    targetDate: str
    