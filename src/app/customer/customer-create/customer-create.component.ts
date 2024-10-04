import {Component, OnDestroy} from '@angular/core';
import {CustomerService} from "../customer.service";
import {Router} from "@angular/router";
import {Customer} from "../Customer.type";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrl: './customer-create.component.scss'
})
export class CustomerCreateComponent implements OnDestroy{
  customer: Omit<Customer, 'id'> = {
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

  private subscription: Subscription | null = null;

  constructor(private customerService: CustomerService, private router: Router) { }

  onSubmit() {
   this.subscription = this.customerService.add(this.customer).subscribe({
       next: () => {
         this.router.navigate(['/customers']);
       },
       error: (err) => {
         console.error('Error adding customer:', err);
       }
     });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
