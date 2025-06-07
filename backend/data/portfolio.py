from dataclasses import dataclass, field
from typing import List, Optional, Literal

@dataclass
class Weight_AssetBreakdown:
    asset_class: str
    percentage: float

    def to_string(self):
        return f"{self.asset_class}: {self.percentage}%"


@dataclass
class Weight_Industry:
    industry: str
    percentage: float

    def to_string(self):
        return f"{self.industry}: {self.percentage}%"

@dataclass
class Weight_Currency:
    currency: str
    percentage: float

    def to_string(self):
        return f"{self.currency}: {self.percentage}%"

@dataclass
class Performance_AssetBreakdown:
    asset_class: str
    percentage: float

    def to_string(self):
        return f"{self.asset_class}: {self.percentage}%"

@dataclass
class Position:
    name: str
    asset_class: str
    industry: str
    currency: str
    marketValue: Optional[float] = None
    percentOfPortfolio: Optional[float] = None
    performance: Optional[float] = None
    currentPrice: Optional[float] = None
    targetPrice: Optional[float] = None
    proximity: Optional[float] = None
    recommendation: Optional[str] = None
    selected_to_sell: Optional[bool] = None


    def to_string(self):
        return (f"{self.name} - Value: {self.marketValue}, "
                f"Asset_Class: {self.asset_class}, Industry {self.industry}," 
                f"Currency {self.currency}, Weight: {self.percentOfPortfolio}%, Perf: {self.performance}%")

@dataclass
class Portfolio:
    id: int
    portfolioNumber: str
    valuation: float
    currency: str
    performance: float
    historicalPerformance: List[float] = field(default_factory=list)
    positions: Optional[List[Position]] = None
    weight_assets_breakdown: Optional[List[Weight_AssetBreakdown]] = None
    weight_industry_breakdown: Optional[List[Weight_Industry]] = None
    weight_currency_breakdown: Optional[List[Weight_Currency]] = None
    performance_assets_breakdown: Optional[List[Performance_AssetBreakdown]] = None
    top_best_positions: Optional[List[Position]] = None
    top_worst_positions: Optional[List[Position]] = None
    

    def to_string(self):
        weight_assets_breakdown_str = ""
        weight_currency_breakdown_str =""
        weight_industry_breakdown_str =""
        performance_assets_breakdown_str = ""
        positions_str = ""
        if self.positions:
            positions_str = "; ".join([p.to_string() for p in self.positions])
        if self.weight_assets_breakdown:
            weight_assets_breakdown_str = "; ".join([ab.to_string() for ab in self.weight_assets_breakdown])
        if self.weight_currency_breakdown:
            weight_currency_breakdown_str = "; ".join([ab.to_string() for ab in self.weight_currency_breakdown])
        if self.weight_industry_breakdown:
            weight_industry_breakdown_str = "; ".join([ab.to_string() for ab in self.weight_industry_breakdown])
        if self.performance_assets_breakdown:
            performance_assets_breakdown_str = "; ".join([ab.to_string() for ab in self.performance_assets_breakdown])
        best_str = ""
        if self.top_best_positions:
            best_str = "; ".join([tp.to_string() for tp in self.top_best_positions])
        worst_str = ""
        if self.top_worst_positions:
            worst_str = "; ".join([tp.to_string() for tp in self.top_worst_positions])
        hist_perf_str = ", ".join([str(p) for p in self.historicalPerformance])

        return (
            f"Portfolio #{self.portfolioNumber} (ID: {self.id})\n"
            f"Valuation: {self.valuation} {self.currency}\n"
            f"Performance: {self.performance}%\n"
            f"Historical Performance: {hist_perf_str}\n"
            f"Positions: {positions_str}\n"
            f"Weight Asset Breakdown: {weight_assets_breakdown_str}\n"
            f"Weight Currency Breakdown: {weight_currency_breakdown_str}\n"
            f"Weight Industry Breakdown: {weight_industry_breakdown_str}\n"
            f"Performance Asset Breakdown: {performance_assets_breakdown_str}\n"
            f"Top Best Positions: {best_str}\n"
            f"Top Worst Positions: {worst_str}\n"
        )
