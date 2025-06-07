# investmentIdea_data.py
import csv
import os
from .investmentIdea import InvestmentIdea

def load_investment_ideas_from_csv(path: str) -> list[InvestmentIdea]:
    ideas: list[InvestmentIdea] = []
    with open(path, newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f, delimiter=';')
        for row in reader:
            ideas.append(InvestmentIdea(
                id=int(row['id']),
                title=row['title'],
                description=row['description'],
                asset_class=row['asset_class'],
                currency=row['currency'],
                duration=row['duration'],
                industry=row['industry'],
            ))
    return ideas

# locate CSV relative to this file
BASE_DIR = os.path.dirname(__file__)
CSV_PATH = os.path.join(BASE_DIR, 'investment_ideas_data.csv')

# load on import
investment_ideas = load_investment_ideas_from_csv(CSV_PATH)
