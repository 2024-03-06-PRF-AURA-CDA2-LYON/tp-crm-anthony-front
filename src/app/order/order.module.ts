import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderListComponent} from "./order-list/order-list.component";
import {OrderProfileComponent} from "./order-profile/order-profile.component";
import {OrderCreateComponent} from "./order-create/order-create.component";
import {OrderEditComponent} from "./order-edit/order-edit.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    OrderListComponent,
    OrderProfileComponent,
    OrderCreateComponent,
    OrderEditComponent,
  ],
  imports: [
    CommonModule, RouterModule, FormsModule,
  ]
})
export class OrderModule { }
