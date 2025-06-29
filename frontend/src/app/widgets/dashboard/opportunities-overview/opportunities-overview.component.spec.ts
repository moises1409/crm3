import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesOverviewComponent } from './opportunities-overview.component';

describe('OpportunitiesOverviewComponent', () => {
  let component: OpportunitiesOverviewComponent;
  let fixture: ComponentFixture<OpportunitiesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpportunitiesOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpportunitiesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
