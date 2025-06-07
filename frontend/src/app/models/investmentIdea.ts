export interface InvestmentIdea {
  id: string;
  title: string;
  description: string;
  asset_class: string; // e.g., "Equity", "Bond", "Real Estate"
  currency: string; // e.g., "Low", "Medium", "High"
  duration: number; // in percentage
  sector: string; // e.g., "Short-term", "Medium-term", "Long-term"
}