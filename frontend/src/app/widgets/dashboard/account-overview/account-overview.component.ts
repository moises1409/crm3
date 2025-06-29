import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


interface Flows {
  inflows: number;
  outflows: number;
}

@Component({
  selector: 'app-account-overview',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './account-overview.component.html',
  styleUrl: './account-overview.component.css'
})

export class AccountOverviewComponent {
  totalAccounts = "CHF 8.9B";
  ytdGrowth = 3.5;
  period: 'YTD' | '1M' | '3M' | '6M' | '1Y' = 'YTD';
  
  flowsData: Record<'YTD'  | '1M' |'3M' | '6M' | '1Y', Flows> = {
    'YTD': { inflows: 450, outflows: 180 },
    '1M': { inflows: 120, outflows: 45 },
    '3M': { inflows: 280, outflows: 95 },
    '6M': { inflows: 620, outflows: 230 },
    '1Y': { inflows: 1250, outflows: 480 },
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
