import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


interface Flows {
  inflows: number;
  outflows: number;
}

@Component({
  selector: 'app-opportunities-overview',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './opportunities-overview.component.html',
  styleUrl: './opportunities-overview.component.css'
})
export class OpportunitiesOverviewComponent {

  totalOpportunities = "CHF 32M";
  ytdGrowth = 7.5;
  period: '1M' | '3M' | '6M' | '1Y' = '1M';
  
  flowsData: Record<'1M' |'3M' | '6M' | '1Y', Flows> = {
    '1M': { inflows: 10, outflows: 2 },
    '3M': { inflows: 14, outflows: 7 },
    '6M': { inflows: 23, outflows: 13 },
    '1Y': { inflows: 32, outflows: 21 },
  };

  get currentFlows(): Flows {
    return this.flowsData[this.period];
  }

  get netFlows(): number {
    return this.currentFlows.inflows - this.currentFlows.outflows;
  }

  setPeriod(period: any) {
    this.period = period;
  }

}
