import { Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {ErrorpageComponent} from "./errorpage/errorpage.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {OrderListComponent} from "./order/order-list/order-list.component";
import {CustomerProfileComponent} from "./customer/customer-profile/customer-profile.component";
import {CustomerCreateComponent} from "./customer/customer-create/customer-create.component";
import {CustomerEditComponent} from "./customer/customer-edit/customer-edit.component";
import {OrderCreateComponent} from "./order/order-create/order-create.component";
import {OrderProfileComponent} from "./order/order-profile/order-profile.component";
import {OrderEditComponent} from "./order/order-edit/order-edit.component";

export const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/create', component: CustomerCreateComponent },
  { path: 'customers/:id', component: CustomerProfileComponent },
  { path: 'customers/:id/edit', component: CustomerEditComponent },
  { path: 'orders', component: OrderListComponent},
  { path: 'orders/create', component: OrderCreateComponent },
  { path: 'orders/:id', component: OrderProfileComponent },
  { path: 'orders/:id/edit', component: OrderEditComponent },
  { path: '**', component: ErrorpageComponent },
];
