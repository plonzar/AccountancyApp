//#region import

import { InvoiceHttpServices } from './invoice.http.services';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

import { UserServices } from './../user services/user.services';
import { CustomerServices } from '../customer services/customer.services';
import { Invoice } from '../../models/invoice.model';
import { Customer } from '../../models/customer.model';
import { InvoiceItem } from '../../models/invoice-item.model';
//#endregion

@Injectable()
export class InvoiceServices{
  constructor(private customerService: CustomerServices, private invoiceHttp: InvoiceHttpServices,private userService: UserServices, private router: Router){}

  invoices: Invoice[] = [];
  invoicesChanged: Subject<Invoice[]> = new Subject<Invoice[]>();

  SetInvoiceshttp(){
    this.invoiceHttp.GetAll().subscribe(
      (response) => {
        if(response !== null)
          this.invoices = response;
        this.invoicesChanged.next(this.invoices);
      },
      (error) => {
        alert("Wystapił błąd połączenia z serwerem prosze spróbować później")
    });

  }

  GetInvoiceByNumber(number: number){
    let index = this.invoices.map(i => i.invoiceNumber).indexOf(number);
    if(this.invoices[index] != null){
      return this.invoices[index];
    }
    else{
      return null;
    }
  }

  AddInvoice(customer: Customer, invoiceItems: InvoiceItem[], paymentDate: Date, paymentType: string){
      if(customer != null && invoiceItems != null){
        let newInvoice = new Invoice();
        //Crating new invoice
        newInvoice.customer = customer;
        newInvoice.invoiceItems = invoiceItems;
        newInvoice.paymentType = paymentType;
        newInvoice.paymentDate = paymentDate;
        newInvoice.invoiceDate = this.SetInvoiceDate();
        newInvoice.itemsPriceTotal = this.CalculateTotalPrice(invoiceItems);
        newInvoice.accounted = this.SetInvoicePaymentStatus(paymentType);

        this.invoiceHttp.Add(newInvoice).subscribe(
          (response) => {
            newInvoice = response;
            this.invoices.push(newInvoice);

            if(!this.customerService.CustomerExist(newInvoice.customer)){
              this.customerService.AddCustomerNonHttp(newInvoice.customer);
            }
            else{
              if(!this.customerService.CustomerEqual(newInvoice.customer)){
                this.customerService.UpdateCustomerNonHttp(newInvoice.customer);
              }
            }
          },
          (error) => {
            if(error.status == "401"){
              this.userService.LogOut();
              return;
            }
            alert("Wystapił błąd proszę spróbować później");
          });
      }
  }

  UpdateInvoice(invoiceToUpdate: Invoice, customer: Customer, invoiceItems: InvoiceItem[], paymentDate: Date, paymentType: string, number: number){
    //set customer data
    this.SetCustomerData(invoiceToUpdate['customer'], customer);
    //set invoiceItems data
    this.SetInvoicItemsData(invoiceToUpdate['invoiceItems'], invoiceItems);
    invoiceToUpdate.paymentType = paymentType;
    invoiceToUpdate.paymentDate = paymentDate;
    invoiceToUpdate.itemsPriceTotal = this.CalculateTotalPrice(invoiceItems); 

    //http update
    this.invoiceHttp.Update(invoiceToUpdate).subscribe(
      (response) => {
        let index = this.invoices.map(i => i.invoiceNumber).indexOf(number);
        this.invoices[index] = response;

        if(!this.customerService.CustomerExist(invoiceToUpdate['customer'])){
          this.customerService.AddCustomerNonHttp(invoiceToUpdate['customer']);
        }
        else{
          if(!this.customerService.CustomerEqual(invoiceToUpdate['customer'])){
            this.customerService.UpdateCustomerNonHttp(invoiceToUpdate['customer']);
          }
        }
      },
      (error) => {
        if(error.status == "401"){
          this.userService.LogOut();
          return;
        }
        alert("Wystapił błąd proszę spróbować później, dane nie zostały zmienione");
      });
  }

  DeleteInvoice(invoiceNumber: number){
    let index = this.invoices.map(i => i.invoiceNumber).indexOf(invoiceNumber);
    if(this.invoices[index] != null){
      this.invoiceHttp.Delete(this.invoices[index].id).subscribe(
        (response) => {        
          this.invoices.splice(index,1);
        },
        (error) => {
          if(error['status'] == "401"){
            this.userService.LogOut();
            return;
          }
          if(error.error.text == "Invoice is not last"){
            alert("Nie można usunąć faktury, nie jest ona ostatnią wystawioną fakturą.");
          }
        }  
      )
    }
    else{
      alert("Nie znaleziono faktury")
    }
  }

  SettleInvoices(setteledInvoices: number[], nip: string){
    this.invoiceHttp.SettleInvoices(setteledInvoices).subscribe(
      () => {
        for(let number of setteledInvoices){
          let invoce = this.GetInvoiceByNumber(number);
          invoce.accounted = true;
        }
        this.router.navigate(["/customer"]);
      },
      (error) => {
        if(error.error.text == "Invalid user"){
          this.userService.LogOut();
        }
        if(error.error.text == "Invalid data"){
          alert("Nie zaznaczyłeś żadnej faktury do rozlicznia");
        }
        else{
          alert("Wystapił błąd proszę spróbować później, dane nie zostały zmienione");
        }
      }
    );
  }
  //#region private methods

  private SetInvoiceDate(){
    let timeNow = new Date()
    return timeNow;
  }
  
  private CalculateTotalPrice(invoiceItems: InvoiceItem[]){
    let totalPrice = invoiceItems.map(i => i.totalPriceWithTax).reduce((a,b)=> Number(a) + Number(b));
    return totalPrice;
  }

  private SetCustomerData(customerToUpdate: Customer, customer: Customer){

    if(this.customerService.GetCustomerByNip(customer.nip) != null){
      customer = this.customerService.GetCustomerByNip(customer.nip);
    }
    customerToUpdate.id = customer.id;
    customerToUpdate.address = customer.address;
    customerToUpdate.city = customer.city;
    customerToUpdate.email = customer.email;
    customerToUpdate.name = customer.name;
    customerToUpdate.nip = customer.nip;
    customerToUpdate.postCode = customer.postCode;
  }

  private SetInvoicItemsData(itemsToUpdate: InvoiceItem[], invoiceItems: InvoiceItem[]){
    let index = 0;
    for(let i = 0; i < itemsToUpdate.length; i++){
      itemsToUpdate[i].amount = invoiceItems[i].amount;
      itemsToUpdate[i].name = invoiceItems[i].name;
      itemsToUpdate[i].tax = invoiceItems[i].tax;
      itemsToUpdate[i].totalPriceWithoutTax = invoiceItems[i].totalPriceWithoutTax;
      itemsToUpdate[i].totalPriceWithTax = invoiceItems[i].totalPriceWithTax;
      itemsToUpdate[i].unitPriceWithoutTax = invoiceItems[i].unitPriceWithoutTax;
      index++;
    }
    for(let i = index; i < invoiceItems.length; i++){
      itemsToUpdate.push(invoiceItems[i]);
    }
  }

  private SetInvoicePaymentStatus(paymentType: string){
    if(paymentType == "gotówka")
      return true
    return false;
  }

  //#endregion
}