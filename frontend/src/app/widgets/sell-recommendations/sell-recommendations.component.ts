import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Positions } from '../../models/positions.model';

export interface Recommendation {
  id: number;
  ticker: string;
  name: string;
  currentPrice: number;
  targetPrice: number;
  proximity: number;
  recommendation: string;
  reasoning: string;
}

@Component({
  selector: 'app-sell-recommendations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sell-recommendations.component.html',
  styleUrl: './sell-recommendations.component.css'
})
export class SellRecommendationsComponent {
  @Input() positions: Positions[] = [];

  getRecommendationBadge(rec: string): string {
    switch (rec) {
      case 'Sell':
        return 'badge badge-underweight';
      case 'Hold':
      default:
        return 'badge badge-neutral';
    }
  }

  toggleSelection(position: Positions) {
    position.selection = !position.selection;
  }

  
}
