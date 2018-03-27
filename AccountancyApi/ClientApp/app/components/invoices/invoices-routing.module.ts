import { Routes, RouterModule } from "@angular/router";

import { InvoiceComponent } from "./invoice/invoice.component";
import { InvoiceDetailsComponent } from "./invoice-details/invoice-details.component";
import { InvoiceEditComponent } from "./invoice-edit/invoice-edit.component";
import { NgModule } from "@angular/core";
import { CanActivateGuard } from "../../services/local authorization/can-activate-guard.service";


const invoicesRouting: Routes = [
  {path:'invoice', component: InvoiceComponent, canActivate: [CanActivateGuard]},
  {path: 'invoice/details', component: InvoiceDetailsComponent, canActivate: [CanActivateGuard]},
  {path:'invoice/add', component: InvoiceEditComponent, canActivate: [CanActivateGuard]},
  {path:'invoice/edit/:id', component: InvoiceEditComponent, canActivate: [CanActivateGuard]},

];

@NgModule({
  imports:[
    RouterModule.forChild(invoicesRouting)
  ],
  exports:[
    RouterModule
  ]
})
export class InvoicesRoutingModule{}