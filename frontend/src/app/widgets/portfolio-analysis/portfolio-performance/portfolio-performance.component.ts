// src/app/portfolio-performance.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartDataset } from 'chart.js';
import { MatCardModule } from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts';
import { Portfolio } from '../../../models/portfolio.model';

@Component({
  selector: 'app-portfolio-performance',
  standalone: true,
  imports: [ MatCardModule, BaseChartDirective ],
  templateUrl: './portfolio-performance.component.html',
  styleUrls: ['./portfolio-performance.component.scss']
})
export class PortfolioPerformanceComponent implements OnChanges {
  @Input() portfolio!: Portfolio;
  @Input() benchmark!: Portfolio;
  months: string[] = ['January', 'February', 'March', 'April', 'May'];

  lineChartData: any;
  lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (this.portfolio && this.benchmark) {
      this.lineChartData = {
        labels: this.months,
        datasets: [
          {
            label: 'Portfolio',
            type: 'line',
            fill: true,
            data: this.portfolio.historicalPerformance,
            borderColor: '#3e95cd',
            backgroundColor: 'rgba(10, 149, 219, 0.2)',
            pointBackgroundColor: '#3e95cd',
            pointBorderColor: '#fff',
            tension: 0.1
          },
          {
            label: 'Benchmark',
            type: 'line',
            data: this.benchmark.historicalPerformance,
            borderColor: 'grey',
            backgroundColor: 'rgba(176, 173, 177, 0.2)',
            pointBackgroundColor: '#ffffff',
            pointBorderColor: '#fff',
            tension: 0.1
          }
        ]
      };
    }
  }
}
