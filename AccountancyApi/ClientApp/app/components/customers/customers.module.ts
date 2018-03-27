import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomersRoutingModule } from './customers-routing.module';
import { RoutingModule } from './../../routing/routing.module';

import { CustomerComponent } from "./customer/customer.component";
import { AddCustomerComponent } from "./add-customer/add-customer.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import { CustomerEditComponent } from "./customer-edit/customer-edit.component";
import { CustomerSearchPipe } from "./pipes/customer-search.pipe";
import { CustomerInvoicesComponent } from './customer-invoices/customer-invoices.component';
import { GlobalPipesExportModule } from './../../pipes/global-pipes-export.module';



@NgModule({
  declarations: [
    CustomerSearchPipe,
    CustomerComponent,
    AddCustomerComponent,
    CustomerDetailsComponent,
    CustomerEditComponent,
    CustomerInvoicesComponent,
],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CustomersRoutingModule,
    GlobalPipesExportModule
  ]
})
export class CustomersModule{

}