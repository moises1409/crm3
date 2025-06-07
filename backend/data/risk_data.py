from .risk import Risk

risks = [
    Risk(id=1, factor="Client Contact", status="risk", detail="No contact in last 6 months", mitigation="Schedule meeting"),
    Risk(id=2, factor="Next Generation", status="risk", detail="No succession planning", mitigation="Update information"),
    Risk(id=3, factor="MyLO Activity", status="engagement", detail="No connection in last 3 months", mitigation="Push investment ideas"),
    Risk(id=4, factor="Events", status="engagement", detail="No events in last 6 months", mitigation="Invite to events"),
    Risk(id=5, factor="Publications", status="engagement", detail="No publications in last 6 months", mitigation="Subscribe to publications"),
] 