import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProfileComponent } from './order-profile.component';

describe('OrderProfileComponent', () => {
  let component: OrderProfileComponent;
  let fixture: ComponentFixture<OrderProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
