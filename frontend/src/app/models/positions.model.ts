export interface Positions {
    name: string;
    asset_class: string;
    industry: string;
    currency: string;
    percentOfPortfolio: number;
    currentPrice: number;
    targetPrice: number;
    recommendation: string;
    selection?: boolean;
}