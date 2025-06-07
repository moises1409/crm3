import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientWealthComponent } from './client-wealth.component';

describe('ClientWealthComponent', () => {
  let component: ClientWealthComponent;
  let fixture: ComponentFixture<ClientWealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientWealthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientWealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
