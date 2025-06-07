import { Component, Input } from '@angular/core';
import { PortfolioHeaderComponent } from './portfolio-header/portfolio-header.component';
import { Portfolio } from '../../models/portfolio.model';
import { PortfolioPerformanceComponent } from './portfolio-performance/portfolio-performance.component';
import { AssetsBreakdownComponent } from "./assets-breakdown/assets-breakdown.component";


@Component({
  selector: 'app-portfolio-analysis',
  standalone: true,
  imports: [PortfolioHeaderComponent, PortfolioPerformanceComponent, 
    AssetsBreakdownComponent],
  templateUrl: './portfolio-analysis.component.html',
  styleUrl: './portfolio-analysis.component.css'
})
export class PortfolioAnalysisComponent {
  @Input() portfolio!: Portfolio;
  @Input() benchmark!: Portfolio; 
}
