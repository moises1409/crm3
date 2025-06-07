export interface Activity {
    id: string;
    date: string;             // ISO date string
    type: string;
    summary: string;
    documents?: string[];
    followUpRequired?: boolean;
  }