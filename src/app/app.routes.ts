import { Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {ErrorpageComponent} from "./errorpage/errorpage.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {OrderListComponent} from "./order/order-list/order-list.component";
import {CustomerProfileComponent} from "./customer/customer-profile/customer-profile.component";
import {CustomerCreateComponent} from "./customer/customer-create/customer-create.component";
import {CustomerEditComponent} from "./customer/customer-edit/customer-edit.component";

export const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/create', component: CustomerCreateComponent },
  { path: 'customers/:id', component: CustomerProfileComponent },
  { path: 'customers/:id/edit', component: CustomerEditComponent },
  { path: 'orders', component: OrderListComponent},
  { path: '**', component: ErrorpageComponent },
];
