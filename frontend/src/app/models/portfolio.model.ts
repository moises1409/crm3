export interface Portfolio {
  portfolioNumber: string;
  valuation: number;
  currency: string;
  performance: number;
  historicalPerformance?: number[];
  weight_assets_breakdown?: {
    asset_class: string;
    percentage: number;
  }[];
  weight_industry_breakdown?:{
    industry: string;
    percentage: number;
  }[];
  weight_currency_breakdown?:{
    currency: string;
    percentage: number;
  }[];
  performance_assets_breakdown?: {
    asset_class: string;
    percentage: number;
  }[];
  
}