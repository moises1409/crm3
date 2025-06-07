from dataclasses import dataclass

@dataclass
class Activity:
    id: int 
    date: str
    type: str
    summary: str
    documents: list[str]
    followUpRequired: bool
    