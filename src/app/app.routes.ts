import { Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {ErrorpageComponent} from "./errorpage/errorpage.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {OrderListComponent} from "./order/order-list/order-list.component";

export const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'customers', component: CustomerListComponent },
  { path: 'orders', component: OrderListComponent},
  { path: '**', component: ErrorpageComponent },
];
