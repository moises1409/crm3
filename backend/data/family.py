from dataclasses import dataclass

@dataclass
class Family:
    id: int
    firstName: str
    lastName: str
    relationship: str
    age: int
    domicile: str
