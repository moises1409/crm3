import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartDataset } from 'chart.js';
import { MatCardModule } from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts';
import { Portfolio } from '../../../models/portfolio.model';

@Component({
  selector: 'app-assets-breakdown',
  standalone: true,
  imports: [MatCardModule, BaseChartDirective],
  templateUrl: './assets-breakdown.component.html',
  styleUrl: './assets-breakdown.component.css'
})
export class AssetsBreakdownComponent implements OnChanges {
  @Input() portfolio!: Portfolio;
  @Input() benchmark!: Portfolio;
  @Input() simulation!: Portfolio;

  months: string[] = ['Cash', 'Bonds', 'Equities', 'Commodities', 'Hedge Fund', 'Real Estate'];
  lineChartData: any;
  
  ngOnChanges(changes: SimpleChanges): void {
    if (this.portfolio && this.benchmark) {
      const assetOrder = ['Cash', 'Bonds', 'Equities', 'Commodities', 'Hedge Fund', 'Real Estate'];

      const getPercentages = (breakdown?: { asset_class: string; percentage: number }[]) =>
        assetOrder.map(asset =>
          breakdown?.find(a => a.asset_class === asset)?.percentage ?? 0
        );

      // Always include portfolio and benchmark
      const datasets = [
        {
          label: 'Portfolio',
          data: getPercentages(this.portfolio.weight_assets_breakdown),
          borderColor: '#3e95cd',
          backgroundColor: 'rgba(10, 149, 219, 0.9)',
          pointBackgroundColor: '#3e95cd',
        },
        {
          label: 'Benchmark',
          data: getPercentages(this.benchmark.weight_assets_breakdown),
          borderColor: 'rgba(239, 236, 240, 0.2)',
          backgroundColor: 'rgba(239, 236, 240, 0.82)',
          pointBackgroundColor: '#ffffff',
          pointBorderColor: '#fff',
          tension: 0.1
        }
      ];

      // Optionally add simulation
      if (this.simulation) {
        datasets.push({
          label: 'Simulation',
          data: getPercentages(this.simulation.weight_assets_breakdown),
          borderColor: '#f4a460',
          backgroundColor: 'rgba(244, 164, 96, 0.7)',
          pointBackgroundColor: '#f4a460',
          pointBorderColor: '#fff',
          tension: 0.1
        });
      }

      this.lineChartData = {
        labels: this.months,
        datasets
      };
    } 
  }
  
  lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
}
