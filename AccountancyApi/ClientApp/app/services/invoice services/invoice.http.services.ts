import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Invoice } from '../../models/invoice.model';
import { CommonService } from '../common.service';
import { InvoiceServices } from './invoice.services';

@Injectable()
export class InvoiceHttpServices{
  
  constructor(private httpClient: HttpClient, private commonData: CommonService){}

  GetByNumber(invoiceNumber: number){
    return this.httpClient.get('api/Invoice/GetByNumber?invoiceNumber=' + invoiceNumber,
    {headers: new HttpHeaders().set( 'Authorization',"Bearer " + this.commonData.token['token'])});
  }

  GetAll(){
    return this.httpClient.get<Invoice[]>('api/Invoice/GetAll',
    {headers: new HttpHeaders().set( 'Authorization',"Bearer " + this.commonData.token['token'])});
  }

  Add(invoice: Invoice){
    return this.httpClient.post<Invoice>("api/Invoice/Add", invoice,
    {headers: new HttpHeaders().set( 'Authorization',"Bearer " + this.commonData.token['token'])});
  }

  Update(invoice: Invoice){
    return this.httpClient.put<Invoice>("api/Invoice/Update", invoice,
    {headers: new HttpHeaders().set( 'Authorization',"Bearer " + this.commonData.token['token'])});
  }

  Delete(id: number){
    return this.httpClient.delete<string>("api/Invoice/Delete?id=" + id,
    {headers: new HttpHeaders().set( 'Authorization',"Bearer " + this.commonData.token['token'])});
  }

  SettleInvoices(setteledInvoices: number[]){
    return this.httpClient.post<any>("api/Invoice/SettleInvoices", setteledInvoices,
    {headers: new HttpHeaders().set( 'Authorization',"Bearer " + this.commonData.token['token'])});
  }
}