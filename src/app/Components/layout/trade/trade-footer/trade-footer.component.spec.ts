import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeFooterComponent } from './trade-footer.component';

describe('TradeFooterComponent', () => {
  let component: TradeFooterComponent;
  let fixture: ComponentFixture<TradeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
