//#region import
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http'
import { RoutingModule } from './routing/routing.module';

import { CustomersModule } from './components/customers/customers.module';
import { InvoicesModule } from './components/invoices/invoices.module';
import { UsersModule } from './components/users/users.module';

import { CustomerServices } from './services/customer services/customer.services';
import { CustomerHttpServices } from './services/customer services/customer.http.services';
import { InvoiceServices } from './services/invoice services/invoice.services';
import { InvoiceHttpServices } from './services/invoice services/invoice.http.services';
import { UserServices } from './services/user services/user.services';
import { UserHttpServices } from './services/user services/user.http.services';
import { CommonService } from './services/common.service';
import { CanActivateGuard } from './services/local authorization/can-activate-guard.service';
//#endregion

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    CustomersModule,
    InvoicesModule,
    UsersModule,
    RoutingModule,
    HttpClientModule,
  ],
  providers: [
    CommonService,
    CustomerServices, 
    CustomerHttpServices, 
    InvoiceServices, 
    InvoiceHttpServices, 
    UserServices, 
    UserHttpServices,
    CanActivateGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }