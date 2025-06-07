import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentRecommendationsComponent } from './investment-recommendations.component';

describe('InvestmentRecommendationsComponent', () => {
  let component: InvestmentRecommendationsComponent;
  let fixture: ComponentFixture<InvestmentRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentRecommendationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
