import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentRecommendation } from '../../models/recommendations.model'; 
import { Positions } from '../../models/positions.model';
import { Portfolio } from '../../models/portfolio.model';
import { AssetsBreakdownComponent } from '../portfolio-analysis/assets-breakdown/assets-breakdown.component';


@Component({
  selector: 'app-portfolio-simulation',
  standalone: true,
  imports: [CommonModule, AssetsBreakdownComponent],
  templateUrl: './portfolio-simulation.component.html',
  styleUrl: './portfolio-simulation.component.css'
})

export class PortfolioSimulationComponent implements OnInit {
  @Input() recommendations: InvestmentRecommendation[] = [];
  @Input() positions: Positions[] = [];
  @Input() portfolio!: Portfolio;
  @Input() benchmark!: Portfolio;
  @Input() simulation!: Portfolio;

  ngOnInit(): void {
    console.log("recommend", this.recommendations);
    console.log("sell", this.positions);
  }
}
