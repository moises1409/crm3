from .activity import Activity

activities = [
    Activity(id=1, type="Call", summary="Introductory call", date="2024-06-01", documents=[], followUpRequired=True),
    Activity(id=2, type="Meeting", summary="Portfolio review", date="2024-06-10", documents=[], followUpRequired=False),
    Activity(id=3, type="Email", summary="Sent investment proposal", date="2024-06-05", documents=[], followUpRequired=False),
    Activity(id=4, type="Call", summary="Discussed new opportunities", date="2024-06-15", documents=[], followUpRequired=False),
] 