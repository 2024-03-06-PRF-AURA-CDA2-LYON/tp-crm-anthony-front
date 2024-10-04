import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Customer} from "../Customer.type";
import {CustomerService} from "../customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.scss'
})
export class CustomerEditComponent implements OnInit, OnDestroy {
  itemId: string | null = null;
  customer$!: Observable<Customer | null>;
  customer: Customer = {
    id:0,
    address: '',
    city: '',
    companyName: '',
    country: '',
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    state: 0,
    zipCode: ''
  };
  customer_id: string = '';

  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService,
  ) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.customer$ = this.customerService.get(this.itemId);

    const customerIdSubscription = this.customer$.subscribe(customer => {
      if (customer) {
        this.customer_id = customer.id.toString();
      }
    });

    this.subscriptions.add(customerIdSubscription);
  }

  onSubmit(form : NgForm) {

    this.customer = {
      id: parseInt(this.customer_id),
      address: form.value.address,
      city: form.value.city,
      companyName: form.value.companyName,
      country: form.value.country,
      email: form.value.email,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      phoneNumber: form.value.phoneNumber,
      state: form.value.state,
      zipCode: form.value.zipCode
    }
    const customerUpdateSubscription = this.customerService.update(this.customer_id, this.customer).subscribe({
      next: () => {
        console.error('Customer successfully updated');
      },
      error: (err) => {
        console.error('Error updating customer:', err);
      }
    });

    this.subscriptions.add(customerUpdateSubscription);
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}
