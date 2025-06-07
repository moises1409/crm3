import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsBreakdownComponent } from './assets-breakdown.component';

describe('AssetsBreakdownComponent', () => {
  let component: AssetsBreakdownComponent;
  let fixture: ComponentFixture<AssetsBreakdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetsBreakdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetsBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
