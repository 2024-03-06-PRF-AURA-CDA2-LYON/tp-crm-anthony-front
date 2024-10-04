import { Component } from '@angular/core';
import {Observable, take} from "rxjs";
import {Customer} from "../../customer/Customer.type";
import {Order} from "../Order.type";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../order.service";

@Component({
  selector: 'app-order-profile',
  templateUrl: './order-profile.component.html',
  styleUrl: './order-profile.component.scss'
})
export class OrderProfileComponent {
  itemId: string | null = null;
  order$!: Observable<Order | null>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService,
  ) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.order$ = this.orderService.get(this.itemId);
  }

  onDeleteOrder(){
    this.order$.pipe(take(1)).subscribe(order =>{
      if (order) {
        this.orderService.delete(order.id.toString()).subscribe({
          next: () => {
            console.log('Order deleted successfully :'+ order.id);
            this.router.navigate(['/orders']);
          },
          error: (err) => {
            console.error('Error deleting order:', err);
          }
        });
      } else {
        console.error('No order found or order ID is missing');
      }
    })
  }
}
