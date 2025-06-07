export interface ClientGoal {
    id: string;
    name: string;
    status: 'On Track' | 'At Risk' | 'Off Track';
    targetAmount: number;
    currentAmount: number;
    targetDate: string;  // ISO string
}