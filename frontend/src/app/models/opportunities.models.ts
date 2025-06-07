export interface Opportunity {
    id: string;
    title: string;
    description: string;
    status: string;
    potentialValue: number;
    dueDate?: string;
    nextSteps?: string;
  }