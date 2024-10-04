import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Order} from "../Order.type";
import {OrderService} from "../order.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent implements OnInit {
  orders$!: Observable<Order[]>;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orders$ = this.orderService.getList();
  }
}
