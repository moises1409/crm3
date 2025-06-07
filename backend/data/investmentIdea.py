from dataclasses import dataclass

@dataclass
class InvestmentIdea:
    id: int
    title: str
    description: str
    asset_class: str
    currency: str
    duration: str
    industry: str
    
    def to_string(self):
        return (
            f"ID: {self.id}; "
            f"Title: {self.title}; "
            f"Description: {self.description}; "
            f"Asset Class: {self.asset_class}; "
            f"Currency: {self.currency}; "
            f"Duration: {self.duration}; "
            f"Sector: {self.industry}"
        )
    