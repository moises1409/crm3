import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type TaskType = 'commercial' | 'operational';

interface TaskCategory {
  id: number;
  category: string;
  description: string;
  pendingVolume: number;
  type: TaskType;
}

@Component({
  selector: 'app-tasks-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks-overview.component.html',
  styleUrl: './tasks-overview.component.css'
})
export class TasksOverviewComponent {
  taskCategories: TaskCategory[] = [
    {
      id: 1,
      category: "Client Onboarding",
      description: "New client documentation and account setup processes",
      pendingVolume: 12,
      type: "commercial"
    },
    {
      id: 2,
      category: "KYC Reviews",
      description: "Know Your Customer documentation updates and reviews",
      pendingVolume: 8,
      type: "operational"
    },
    {
      id: 3,
      category: "Investment Reviews",
      description: "Quarterly portfolio reviews and investment recommendations",
      pendingVolume: 15,
      type: "commercial"
    },
    {
      id: 4,
      category: "Compliance Tasks",
      description: "Regulatory compliance and reporting requirements",
      pendingVolume: 5,
      type: "operational"
    },
    {
      id: 5,
      category: "Client Meetings",
      description: "Scheduled client consultations and relationship management",
      pendingVolume: 9,
      type: "commercial"
    }
  ];

}
