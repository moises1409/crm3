import { Component, Input } from '@angular/core';
import { ClientGoal } from '../../../models/goal.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-client-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-goals.component.html',
  styleUrl: './client-goals.component.css'
})


export class ClientGoalsComponent {
  @Input() goals: ClientGoal[] = [];

  formatCurrency(amount: number): string {
    return new Intl
      .NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: amount >= 1_000_000 ? 'compact' : 'standard',
        maximumFractionDigits: 1
      })
      .format(amount);
  }

  formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  getProgressPercent(goal: ClientGoal): number {
    return Math.round((goal.currentAmount / goal.targetAmount) * 100);
  }

  getStatusClass(status: ClientGoal['status']): string {
    switch (status) {
      case 'On Track':  return 'status-on-track';
      case 'At Risk':   return 'status-at-risk';
      default:          return 'status-off-track';
    }
  }
}
