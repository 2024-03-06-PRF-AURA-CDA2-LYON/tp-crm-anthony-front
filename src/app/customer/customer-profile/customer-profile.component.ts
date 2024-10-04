import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../customer.service";
import {Customer} from "../Customer.type";
import {Observable, take} from "rxjs";

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrl: './customer-profile.component.scss'
})
export class CustomerProfileComponent implements OnInit {

  itemId: string | null = null;
  customer$!: Observable<Customer | null>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService,
  ) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.customer$ = this.customerService.get(this.itemId);
  }

  onDeleteCustomer(){
    this.customer$.pipe(take(1)).subscribe(customer =>{
      if (customer) {
        this.customerService.delete(customer.id.toString()).subscribe({
          next: () => {
            console.log('Customer deleted successfully :'+ customer.id);
            this.router.navigate(['/customers']);
          },
          error: (err) => {
            console.error('Error deleting customer:', err);
          }
        });
      } else {
        console.error('No customer found or customer ID is missing');
      }
    })
  }
}
