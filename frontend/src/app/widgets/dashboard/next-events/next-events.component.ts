import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Event {
  type: string;
  title: string;
  time: string;
  date: string;
  location: string;
  priority: 'high' | 'medium' | string;
}

@Component({
  selector: 'app-next-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './next-events.component.html',
  styleUrl: './next-events.component.css'
})
export class NextEventsComponent {
  events: Event[] = [
    {
      type: "Client Meeting",
      title: "Portfolio Review - Mr. Anderson",
      time: "09:00 AM",
      date: "Today",
      location: "Office",
      priority: "high",
    },
    {
      type: "Client Meeting",
      title: "Investment Discussion - Chen Family",
      time: "02:30 PM",
      date: "Today",
      location: "Client Office",
      priority: "high",
    },
    {
      type: "Team Meeting",
      title: "Weekly Pipeline Review",
      time: "11:00 AM",
      date: "Tomorrow",
      location: "Conference Room A",
      priority: "medium",
    },
    {
      type: "Company Event",
      title: "Private Banking Seminar",
      time: "06:00 PM",
      date: "Dec 30",
      location: "Grand Hotel",
      priority: "medium",
    },
    {
      type: "Client Meeting",
      title: "Year-end Planning - Johnson Trust",
      time: "10:00 AM",
      date: "Jan 3",
      location: "Office",
      priority: "high",
    },
  ];

  getEventClass(type: string): string {
    switch (type) {
      case 'Client Meeting': return 'event-client';
      case 'Team Meeting': return 'event-team';
      case 'Company Event': return 'event-company';
      default: return 'event-default';
    }
  }

}
