import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Alert {
  type: string;
  client: string;
  message: string;
  priority: 'high' | 'medium' | 'low' | string;
  date: string;
}

@Component({
  selector: 'app-key-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './key-alerts.component.html',
  styleUrl: './key-alerts.component.css'
})

export class KeyAlertsComponent {
  alerts: Alert[] = [
    {
      type: "Birthday",
      client: "Mr. Johnson",
      message: "Client birthday tomorrow",
      priority: "medium",
      date: "Dec 29",
    },
    {
      type: "Contract Renewal",
      client: "Mrs. Schmidt",
      message: "Mandate renewal in 30 days",
      priority: "high",
      date: "Jan 15",
    },
    {
      type: "Review Meeting",
      client: "Thompson Holdings",
      message: "Quarterly review scheduled",
      priority: "medium",
      date: "Jan 5",
    },
    {
      type: "Tax Planning",
      client: "Mr. Chen",
      message: "Tax optimization deadline approaching",
      priority: "high",
      date: "Dec 31",
    },
    {
      type: "Investment",
      client: "Davis Family Trust",
      message: "Large cash position needs allocation",
      priority: "medium",
      date: "Jan 8",
    },
  ];

  getPriorityClasses(priority: string): string {
    switch (priority) {
      case 'high': return 'alert-high';
      case 'medium': return 'alert-medium';
      case 'low': return 'alert-low';
      default: return 'alert-default';
    }
  }

}
