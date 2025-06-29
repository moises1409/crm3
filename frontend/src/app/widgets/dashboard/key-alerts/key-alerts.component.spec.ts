import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyAlertsComponent } from './key-alerts.component';

describe('KeyAlertsComponent', () => {
  let component: KeyAlertsComponent;
  let fixture: ComponentFixture<KeyAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyAlertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
