import { ClientGoal } from "./goal.model";
import { Opportunity } from "./opportunities.models";
import { Activity } from "./activities.model";
import { Risk } from "./risk.model";
import { Family } from "./family.model";

export interface Contact {
  firstName: string;
  lastName: string;
  country: string;
  totalAum: string;
  clientSegment: string;
  contactType: string;
  last_interaction: string;
  profitability: number;
  performance: number;
  category: string;
  goals: ClientGoal[];
  opportunities: Opportunity[];
  activities: Activity[];
  risks: Risk[];
  family: Family[];
} 