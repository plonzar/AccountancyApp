
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CustomerComponent } from "./customer/customer.component";
import { AddCustomerComponent } from "./add-customer/add-customer.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import { CustomerEditComponent } from "./customer-edit/customer-edit.component";
import { CustomerInvoicesComponent } from './customer-invoices/customer-invoices.component';
import { CanActivateGuard } from "../../services/local authorization/can-activate-guard.service";
import { CustomerSendEmailComponent } from "../email/customer-send-email/customer-send-email.component";

const customersRouting: Routes = [
    {path: 'customer', component: CustomerComponent, canActivate: [CanActivateGuard]},
    {path: 'customer/add', component: AddCustomerComponent, canActivate: [CanActivateGuard]},
    {path: 'customer/details/:nip', component: CustomerDetailsComponent,children:[
      {path: 'edit', component: CustomerEditComponent, canActivate: [CanActivateGuard]},
      {path: 'invoices', component: CustomerInvoicesComponent, canActivate: [CanActivateGuard]},
      {path: 'email', component: CustomerSendEmailComponent, canActivate: [CanActivateGuard]},
    ], canActivate: [CanActivateGuard]},
]

@NgModule({
  imports:[
    RouterModule.forChild(customersRouting)
  ],
  exports:[
    RouterModule
  ]
})
export class CustomersRoutingModule{}