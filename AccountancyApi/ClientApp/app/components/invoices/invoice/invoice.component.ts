import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Invoice } from '../../../models/invoice.model';
import { Observable } from 'rxjs/Observable';

import { InvoiceServices } from '../../../services/invoice services/invoice.services';
import { InvoiceHttpServices } from '../../../services/invoice services/invoice.http.services';
import { UserServices } from '../../../services/user services/user.services';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  @ViewChild('SearchFrom') searchFrom: ElementRef;
  @ViewChild('SearchTo') searchTo: ElementRef;
  serchParam: string = '';
  searchFromChanged: boolean = false;
  searchToChanged: boolean = false;
  invoices: Invoice[] = [];
  searchDisabled = false;
  
  constructor(public invoiceService: InvoiceServices,private router: Router, private userService: UserServices) {
    if(this.userService.userInactive){
      this.userService.CheckTokenExpired();
      this.userService.ResetActiveTimer();
    }
    this.invoices = this.invoiceService.invoices;
  }

  ngOnInit() {
    this.SetDate(this.searchFrom);
    this.SetDate(this.searchTo);
    this.invoiceService.invoicesChanged.subscribe(
      (invoices) => this.invoices = invoices
    );
  }

  OnSearchFromChange(){
    this.searchFromChanged = true;
    this.DateRangeIsValid(this.searchToChanged)
  }

  OnSearchToChange(){
    this.searchToChanged = true;
    this.DateRangeIsValid(this.searchFromChanged)
  }

  SearchByDate(){
    let partSearchFrom = this.searchFrom.nativeElement.value.split('-');
    let partSearchTo = this.searchTo.nativeElement.value.split('-');
    let searchFrom = new Date(partSearchFrom[0], partSearchFrom[1] - 1, partSearchFrom[2]);
    let searchTo = new Date(partSearchTo[0], partSearchTo[1] - 1, partSearchTo[2], 23);
    let newArray: Invoice[] = [];

    for(let invoice of this.invoiceService.invoices){
      let invoiceDate = new Date(invoice.invoiceDate);
      if(invoiceDate >= searchFrom && invoiceDate <= searchTo){  
        newArray.push(invoice);
      }
    }
    this.invoices = newArray;
  }

  ResetSerach(){
    this.invoices = this.invoiceService.invoices;
    this.SetDate(this.searchFrom);
    this.SetDate(this.searchTo);
  }

  private DateRangeIsValid(change: boolean){
    if(change){
      let dateFromArray = this.searchFrom.nativeElement.value.split('-');
      let dateFrom = new Date(dateFromArray[0], dateFromArray[1] - 1, dateFromArray[2] - 1);
      let dateToArray = this.searchTo.nativeElement.value.split('-');
      let dateTo = new Date(dateToArray[0], dateToArray[1] - 1, dateToArray[2] - 1);

      if(dateFrom > dateTo){
        alert("Data początkowa jest większa niż data końcowa");
        this.searchDisabled = true;
        //this.SetDate(this.searchFrom);
      }
      else{
        this.searchDisabled = false;
      }
    }
  }

  private SetDate(dateInput: ElementRef){
    let timeNow = new Date()
    let day = timeNow.getDate();
    let month = timeNow.getMonth() + 1;
    let year = timeNow.getFullYear();
    let dayFormat: string;
    let monthFormat: string;
    let yearFormat: string = String(year);
    let today: string;

    if(day < 10)
      dayFormat = '0' + day;
    else
      dayFormat = day.toString();
    if(month < 10)
      monthFormat = '0' + month;
    else
      monthFormat = month.toString();
    today = yearFormat + '-' + monthFormat + '-' + dayFormat;
    dateInput.nativeElement.value = today;
  }

}
