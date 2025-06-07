import { InvestmentIdea } from "./investmentIdea";

export interface InvestmentRecommendation {
  idea: InvestmentIdea;
  llm_evaluation: string;
  added?: boolean;
  percentOfPortfolio: number;
}