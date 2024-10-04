import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {CustomerProfileComponent} from "./customer-profile/customer-profile.component";
import {CustomerCreateComponent} from "./customer-create/customer-create.component";
import {CustomerEditComponent} from "./customer-edit/customer-edit.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerProfileComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
  ],
  imports: [
    CommonModule, RouterModule, FormsModule,
  ],
  providers:[],
})
export class CustomerModule { }
