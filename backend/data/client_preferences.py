from dataclasses import dataclass

@dataclass
class InvestmentPreferences:
    suitability: str
    constraint: str
    activity_notes: str

    def to_string(self):
        return f"Suitability: {self.suitability}, constraint: {self.constraint}, preferences: {self.activity_notes}"
