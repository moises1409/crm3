import { Component, Input } from '@angular/core';
import { Activity } from '../../../models/activities.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-activities.component.html',
  styleUrl: './client-activities.component.css'
})
export class ClientActivitiesComponent {
  @Input() activities: Activity[] = [];

  formatDate(dateString: string): string {
    const opts: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, opts);
  }
}
