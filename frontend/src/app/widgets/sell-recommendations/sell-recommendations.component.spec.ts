import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellRecommendationsComponent } from './sell-recommendations.component';

describe('SellRecommendationsComponent', () => {
  let component: SellRecommendationsComponent;
  let fixture: ComponentFixture<SellRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellRecommendationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
