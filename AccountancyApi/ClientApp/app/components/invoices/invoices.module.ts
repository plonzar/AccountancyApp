import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { InvoiceComponent } from "./invoice/invoice.component";
import { InvoiceEditComponent } from "./invoice-edit/invoice-edit.component";
import { InvoiceDetailsComponent } from "./invoice-details/invoice-details.component";
import { InvoicesRoutingModule } from "./invoices-routing.module";
import { InvoiceNumberSearchPipe } from "./pipes/InvoiceNumberSearch.pipe";
import { GlobalPipesExportModule } from './../../pipes/global-pipes-export.module';

@NgModule({
  declarations: [
    InvoiceComponent,
    InvoiceEditComponent,
    InvoiceDetailsComponent,
    InvoiceNumberSearchPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InvoicesRoutingModule,
    GlobalPipesExportModule
  ]
})
export class InvoicesModule{

}