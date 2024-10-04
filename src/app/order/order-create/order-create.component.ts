import {Component, OnDestroy} from '@angular/core';
import {Order} from "../Order.type";
import {Router} from "@angular/router";
import {OrderService} from "../order.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrl: './order-create.component.scss'
})
export class OrderCreateComponent implements OnDestroy{
  order: Omit<Order, 'id'> = {
    tva: 23,
    comment: '',
    nbDays: 0,
    serviceType: '',
    state: 1,
    totalExcludeTax: 0,
    clientId: {
      id: 0
    },
  };
  private subscription: Subscription | null = null;

  constructor(private orderService: OrderService, private router: Router) { }

  onSubmit() {
    console.log("Avant envoi:"+JSON.stringify(this.order));
    this.subscription = this.orderService.add(this.order).subscribe({
      next: () => {
        this.router.navigate(['/orders']);
      },
      error: (err) => {
        console.error('Error adding order:', err);
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
