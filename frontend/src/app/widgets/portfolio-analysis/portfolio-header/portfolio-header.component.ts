import { Component, Input } from '@angular/core';
import { Portfolio } from '../../../models/portfolio.model';

@Component({
  selector: 'app-portfolio-header',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-header.component.html',
  styleUrl: './portfolio-header.component.css'
})
export class PortfolioHeaderComponent {
  @Input() portfolio!: Portfolio;
  @Input() benchmark!: Portfolio;

  get performanceClass(): string {
    return this.portfolio.performance > 0 ? 'positive' : 'negative';
  }

  get performanceIcon(): string {
    return this.portfolio.performance > 0 ? 'arrow_upward' : 'arrow_downward';
  }

  get performanceText(): string {
    return this.portfolio.performance > 0 ? 'Positive Performance' : 'Negative Performance';
  }

}
