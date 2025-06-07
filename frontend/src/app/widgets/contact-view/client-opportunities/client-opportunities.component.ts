import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Opportunity } from '../../../models/opportunities.models';

@Component({
  selector: 'app-client-opportunities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-opportunities.component.html',
  styleUrl: './client-opportunities.component.css'
})

export class ClientOpportunitiesComponent {
  @Input() opportunities: Opportunity[] = [];

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: amount >= 1_000_000 ? 'compact' : 'standard',
      maximumFractionDigits: 1
    }).format(amount);
  }

  formatDate(dateString?: string): string {
    if (!dateString) return '';
    const opts: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, opts);
  }

  statusClass(status: string): string {
    switch (status) {
      case 'New':          return 'badge-new';
      case 'In Progress':  return 'badge-in-progress';
      case 'Proposed':     return 'badge-proposed';
      case 'Won':          return 'badge-won';
      case 'Lost':         return 'badge-lost';
      default:             return 'badge-default';
    }
  }

}
