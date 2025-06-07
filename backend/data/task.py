from dataclasses import dataclass

@dataclass
class Task:
    id: int
    description: str
    due_date: str
    completed: bool 