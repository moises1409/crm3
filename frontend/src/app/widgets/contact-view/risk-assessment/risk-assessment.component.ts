import { Component, Input } from '@angular/core';
import { Risk } from '../../../models/risk.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-risk-assessment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './risk-assessment.component.html',
  styleUrl: './risk-assessment.component.css'
})

export class RiskAssessmentComponent {
  @Input() risks: Risk[] = [];

  get engagementRate(): number {
    if (!this.risks) return 100;
    const engagementRisks = this.risks.filter(r => r.status === 'engagement').length;
    const rate = 100 - (engagementRisks * 25);
    return rate < 0 ? 0 : rate;
  }

  get retentionRate(): number {
    if (!this.risks) return 100;
    const churnRisks = this.risks.filter(r => r.status === 'risk').length;
    const rate = 100 - (churnRisks * 25);
    return rate < 0 ? 0 : rate;
  }
}
