import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from './../../../models/invoice.model';
import { Customer } from '../../../models/customer.model';
import { CustomerServices } from './../../../services/customer services/customer.services';
import { InvoiceServices } from '../../../services/invoice services/invoice.services';

@Component({
  selector: 'app-customer-invoices',
  templateUrl: './customer-invoices.component.html',
  styleUrls: ['./customer-invoices.component.css']
})
export class CustomerInvoicesComponent implements OnInit {

  constructor(private customerService: CustomerServices, private invoiceService: InvoiceServices, private activeRoute: ActivatedRoute) { }

  customer: Customer = new Customer();
  invoices: Invoice[] = [];
  nip: string;
  setteledInvoices: number[] = [];

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(
      params => {
       this.nip = params['nip'];
       this.customer = this.customerService.GetCustomerByNip(this.nip);
       this.invoices = this.invoiceService.invoices.filter(i => {return i.customer.nip == this.nip});
      }
    );
  }

  AddToAccountedList(event, invoiceNumber: number){
    let index = this.setteledInvoices.indexOf(invoiceNumber);
    if(event.target.checked){
      if(index == -1)
        this.setteledInvoices.push(invoiceNumber);
    }
    else{
      if(index != -1)
        this.setteledInvoices.splice(index, 1);
    }
  }

  SettleInvoices(){
    this.invoiceService.SettleInvoices(this.setteledInvoices, this.nip);
  }
}
