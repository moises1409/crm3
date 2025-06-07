from .opportunity import Opportunity

opportunities = [
    Opportunity(id=1, title="Investment in Fund X", description="Investment in Fund X", status="Proposal", potentialValue=500000, dueDate="2025-05-15", nextSteps="Schedule call with portfolio manager."),
    Opportunity(id=2, title="Real Estate Fund", description="Real Estate Fund", status="Negotiation", potentialValue=300000, dueDate="2025-04-30", nextSteps="Draft proposal and send to client."),
    Opportunity(id=3, title="Tech Startup Investment", description="Tech Startup Investment", status="Initial Contact", potentialValue=200000, dueDate="2025-03-22", nextSteps="Schedule call with portfolio manager."),
] 