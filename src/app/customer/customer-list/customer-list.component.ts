import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Customer} from "../Customer.type";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit {
  customers$!: Observable<Customer[]>;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customers$ = this.customerService.getList();
  }
}
