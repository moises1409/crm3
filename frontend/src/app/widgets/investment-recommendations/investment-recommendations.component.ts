import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentRecommendation } from '../../models/recommendations.model';    
import { InvestmentIdea } from '../../models/investmentIdea';
import { Client_Preferences } from '../../models/preferences';



@Component({
  selector: 'app-investment-recommendations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-recommendations.component.html',
  styleUrl: './investment-recommendations.component.css'
})
export class InvestmentRecommendationsComponent implements OnInit {
  @Input() recommendations: InvestmentRecommendation[] = [];
  @Input() preferences!: Client_Preferences;

  ngOnInit(): void {
    console.log("recomm:",this.recommendations);
    console.log("pref:", this.preferences);
  }

  addToCart(product: InvestmentRecommendation) {
    product.added = true;
    console.log("product added")
  }
}
