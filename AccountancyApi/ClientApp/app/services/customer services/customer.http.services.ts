import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../../models/customer.model';
import { CommonService } from './../common.service';

@Injectable()
export class CustomerHttpServices{
  constructor(private httpClient: HttpClient, private commonData: CommonService){}

  GetByNip(nip: string){
    return this.httpClient.get<Customer>('api/Customer/GetByNip?nip=' + nip, 
    {headers: new HttpHeaders().set( 'Authorization',"Bearer " + this.commonData.token['token'])});
  }

  GetAll(){
    return this.httpClient.get<Customer[]>('api/Customer/GetAll',
    {headers: new HttpHeaders().set( 'Authorization',"Bearer " + this.commonData.token['token'])});
  }

  Add(customer: Customer){
    return this.httpClient.post<Customer>("api/Customer/Add", customer,
     {headers: new HttpHeaders().set( 'Authorization',"Bearer " + this.commonData.token['token'])});
  }

  Update(customer: Customer){
    return this.httpClient.put<Customer>("api/Customer/Update", customer,
    {headers: new HttpHeaders().set( 'Authorization',"Bearer " + this.commonData.token['token'])});
  }

  Exist(customer: Customer){
    return this.httpClient.post<boolean>("api/Customer/Exist", customer,
    {headers: new HttpHeaders().set( 'Authorization',"Bearer " + this.commonData.token['token'])});
  }
}