from dataclasses import dataclass

@dataclass
class Risk:
    id: int
    factor: str
    status: str 
    detail: str
    mitigation: str
