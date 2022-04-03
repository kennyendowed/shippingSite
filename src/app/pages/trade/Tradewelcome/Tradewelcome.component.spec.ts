import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeWelcomeComponent } from './Tradewelcome.component';

describe('TradeWelcomeComponent', () => {
  let component: TradeWelcomeComponent;
  let fixture: ComponentFixture<TradeWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
