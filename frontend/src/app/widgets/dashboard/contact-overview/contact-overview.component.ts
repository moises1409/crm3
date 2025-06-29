import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

import { ChartOptions, ChartType, ChartData, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-contact-overview',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './contact-overview.component.html',
  styleUrl: './contact-overview.component.css'
})
export class ContactOverviewComponent implements OnInit {
  totalContacts = 120;
  ytdGrowth = 8;

  distributionCriteria: string = 'type'; // Default criteria
  currentDistribution: { name: string; value: number; fill: string }[] = [
    { name: 'Clients', value: 60, fill: '#3b82f6' },
        { name: 'Prospects', value: 40, fill: '#22c55e' },
        { name: 'Leads', value: 20, fill: '#f59e42' }
  ];

  pieChartLabels: string[] = [];
  pieChartData: ChartData<'pie', number[], string> = {
    labels: [],
    datasets: [{ data: [], backgroundColor: [] }]
  };
  pieChartColors: any[] = [];
  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  };
  pieChartPlugins = [];

  ngOnInit() {
    this.updateChartData();
  }

  setCriteria(criteria: string) {
    this.distributionCriteria = criteria;
    // Example: update currentDistribution based on criteria
    // Replace this with your real logic
    if (criteria === 'type') {
      this.currentDistribution = [
        { name: 'Clients', value: 60, fill: '#3b82f6' },
        { name: 'Prospects', value: 40, fill: '#22c55e' },
        { name: 'Leads', value: 20, fill: '#f59e42' }
      ];
    } else if (criteria === 'segment') {
      this.currentDistribution = [
        { name: 'Entrepreneurs', value: 60, fill: '#3b82f6' },
        { name: 'Privatiers', value: 40, fill: '#22c55e' },
        { name: 'Top Executives', value: 20, fill: '#f59e42' },
        { name: 'LumpSum', value: 30, fill: '#f87171' }
      ];
    } else if (criteria === 'age') {
      this.currentDistribution = [
        { name: '18-30', value: 30, fill: '#3b82f6' },
        { name: '31-50', value: 50, fill: '#22c55e' },
        { name: '51+', value: 40, fill: '#f59e42' }
      ];
    } else if (criteria === 'domicile') {
      this.currentDistribution = [
        { name: 'Switzerland', value: 70, fill: '#3b82f6' },
        { name: 'France', value: 30, fill: '#22c55e' },
        { name: 'Germany', value: 20, fill: '#f59e42' }
      ];
    }
    this.updateChartData();
  }

  updateChartData() {
    this.pieChartData = {
      labels: this.currentDistribution.map(item => item.name),
      datasets: [{
        data: this.currentDistribution.map(item => item.value),
        backgroundColor: this.currentDistribution.map(item => item.fill)
      }]
    };
  }
}
