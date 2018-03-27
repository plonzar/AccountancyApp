import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Customer } from '../../models/customer.model';
import { UserServices } from './../user services/user.services';
import { CustomerHttpServices } from './customer.http.services';

@Injectable()
export class CustomerServices{

  constructor(private customerHttp: CustomerHttpServices, private userService: UserServices){}

  customers: Customer[] = [];
  customersChanged: Subject<Customer[]> = new Subject<Customer[]>();
    
  //http setting customers Array on app start
  SetCustomersHttp(){
      this.customerHttp.GetAll().subscribe(
        (response) => {
          this.customers = response;
          this.customersChanged.next(this.customers);
        },
        (error) => {
          if(error.status == "401"){
            this.userService.LogOut();
            return;
          }
        }
      )
      return this.customers;
  }
  
  AddCustomer(newCustomer: Customer){
    let customerExist = this.customers.map(c => c.nip).indexOf(newCustomer.nip);
    if(customerExist != -1){
        let currentCutomer = this.customers[customerExist]
        let choice = confirm("klient o podanym NIP juz jest w bazie danych:\n" + currentCutomer.name + 
        "\n" + currentCutomer.city + " " + currentCutomer.postCode + "\n" + currentCutomer.address + "\n" 
        + currentCutomer.nip + "\n\nCzy chcesz nadpisać klienta?"
      );

      if(choice){
        this.UpdateCustomer(newCustomer);
      }
    }
    else{
      this.customerHttp.Add(newCustomer).subscribe(
        (response) => {
          this.customers.push(response);
        },
        (error) => {
          if(error.status == "401"){
            this.userService.LogOut();
            return;
          }
        });
    }
  }

  UpdateCustomer(customer: Customer){
    let customerIndex = this.customers.map(c => c.nip).indexOf(customer.nip);

    if(this.customers[customerIndex] != null){
        try{
          this.customerHttp.Update(customer).subscribe(
            (response) => {                  
              this.customers[customerIndex] = response;
            },
            (error) => {
              if(error.status == "401"){
                this.userService.LogOut();
                return;
              }
              alert("Wystapił błąd podczas połączenia z serwerem");
          });
        }
        catch(err){
          return 0;
        }
    }
  }

  //#region Non http methods

  GetCustomerByIndex(index:number){
    return this.customers[index];
  }

  GetCustomerByNip(nip: string){
      return this.customers.find(c => c.nip == nip);
  }

  GetCustomerByName(name: string){
    return this.customers.find(c => c.name === name);
  }

  CustomerExist(customer: Customer){
      if((this.customers.map(c => c.nip).indexOf(customer.nip)) == -1){
        return false;
      }
      else{
        return true;
      }
  }

  CustomerEqual(customer: Customer){
      if(this.CustomerExist(customer)){
        let index = this.customers.map(c => c.nip).indexOf(customer.nip);
        let passedCustomer = JSON.stringify(customer);
        let originalCustomer = JSON.stringify(this.GetCustomerByIndex(index));
        if(passedCustomer != originalCustomer){
          return false;
        }
        else{
          return true;
        }
      }
  }

  AddCustomerNonHttp(customer: Customer){
      this.customers.push(customer);
  }

  UpdateCustomerNonHttp(customer: Customer){
      let customerIndex = this.customers.map(c => c.nip).indexOf(customer.nip);
      this.customers[customerIndex] = customer;
  }

  //#endregion
}