import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientGoalsComponent } from './client-goals.component';

describe('ClientGoalsComponent', () => {
  let component: ClientGoalsComponent;
  let fixture: ComponentFixture<ClientGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientGoalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
