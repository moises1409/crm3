from .contact import Contact
from .activity_data import activities
from .goal_data import goals
from .opportunity_data import opportunities
from .task_data import tasks
from .risk_data import risks


contacts = [
    Contact(
        firstName="Alice",
        lastName="Johnson",
        country="France",
        totalAum="35M",
        clientSegment="Top Executive",
        contactType="Primary",
        last_interaction="1 week ago",
        profitability=3,
        performance=-15,
        category="Key Client",
        investment_preferences="US, Technology sector",
        activities=[activities[0], activities[1]],
        goals=[goals[0], goals[3]],
        opportunities=[opportunities[0]],
        tasks=[tasks[0]],
        risks=[risks[0], risks[1], risks[2], risks[3], risks[4]],
        family=[]
    ),
    Contact(
        firstName="Bob",
        lastName="Smith",
        country="Switzerland",
        totalAum="25M",
        clientSegment="Privatier",
        contactType="Client",
        last_interaction="1 month ago",
        profitability=2,
        performance=3,
        category="Risk",
        investment_preferences="Europe, Real Estate",
        activities=[activities[2]],
        goals=[goals[1]],
        opportunities=[opportunities[1]],
        tasks=[tasks[1]],
        risks=[risks[2], risks[3], risks[4]],
        family=[]
    ),
    Contact(
        firstName="Charlie",
        lastName="Brown",
        country="Switzerland",
        totalAum="15,5M",
        clientSegment="Entrepreneur",
        contactType="Client",
        last_interaction="6 months ago",
        profitability=10,
        performance=-10,
        category="Opportunity",
        investment_preferences="Asia, Emerging Markets",
        activities=[activities[3]],
        goals=[goals[2]],
        opportunities=[opportunities[2]],
        tasks=[tasks[2]],
        risks=[risks[0], risks[1], risks[3], risks[4]],
        family=[]
    )
] 