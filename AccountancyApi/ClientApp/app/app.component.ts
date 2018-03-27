import { Component, OnInit } from '@angular/core';

import { Invoice } from './models/invoice.model';
import { CustomerServices } from './services/customer services/customer.services';
import { InvoiceServices } from './services/invoice services/invoice.services';
import { UserServices } from './services/user services/user.services';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  title = 'Rachunkowość';
  width = window.innerWidth;
  signedIn:boolean;

  constructor(private customerServices: CustomerServices, 
    private invoiceServices: InvoiceServices, 
    private userService: UserServices, 
    private commonData: CommonService){}
  
  ngOnInit(){
    this.signedIn = this.userService.signedIn;
    this.userService.signinStatusChanged.subscribe((value) => {
      this.signedIn = value;
      if(this.signedIn){
        this.customerServices.SetCustomersHttp();
        this.invoiceServices.SetInvoiceshttp();
        this.userService.StartActiveTimer();
      }
      else{
        this.invoiceServices.invoices = [];
        this.customerServices.customers = [];
      }
    });
  }
  
}
