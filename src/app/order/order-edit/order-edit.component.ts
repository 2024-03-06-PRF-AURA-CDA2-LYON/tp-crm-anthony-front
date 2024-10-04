import { Component } from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Order} from "../Order.type";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../order.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrl: './order-edit.component.scss'
})
export class OrderEditComponent {
  itemId: string | null = null;
  order$!: Observable<Order | null>;
  order: Order = {
    id:0,
    tva: 23,
    comment: '',
    nbDays: 0,
    serviceType: '',
    state: 1,
    totalExcludeTax: 0,
    clientId: {
      id: 0
    }
  };
  order_id: string = '';

  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService,
  ) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.order$ = this.orderService.get(this.itemId);

    const orderIdSubscription = this.order$.subscribe(order => {
      if (order) {
        this.order_id = order.id.toString();
      }
    });
    this.subscriptions.add(orderIdSubscription);
  }

  onSubmit(form : NgForm) {

    this.order = {
      id:parseInt(this.order_id),
      tva: form.value.tva,
      comment: form.value.comment,
      nbDays: form.value.nbDays,
      serviceType: form.value.serviceType,
      state: form.value.state,
      totalExcludeTax: form.value.totalExcludeTax,
      clientId: {
        id: form.value.clientId
      },
    };

    const orderUpdateSubscription = this.orderService.update(this.order_id, this.order).subscribe({
      next: () => {
        console.error('Order successfully updated');
      },
      error: (err) => {
        console.error('Error updating order:', err);
      }
    });

    this.subscriptions.add(orderUpdateSubscription);
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}
