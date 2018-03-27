import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../../../models/customer.model';
import { CustomerServices } from '../../../services/customer services/customer.services';
import { CustomerHttpServices } from '../../../services/customer services/customer.http.services';
import { UserServices } from './../../../services/user services/user.services';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
  customers: Customer[] = [];
  searchParam: string = '';
  orderDescending: boolean = false;

  constructor(private customerService: CustomerServices, private router: Router, private userService: UserServices) {

    this.customers = this.customerService.customers;

    if(this.userService.userInactive){
      this.userService.CheckTokenExpired();
      this.userService.ResetActiveTimer();
    }
  }
  
  ngOnInit() {
    this.customerService.customersChanged.subscribe(
      (customers) => {
        this.customers = customers;
      });
  }

  SortCustomers(sortParam: string){
    if(this.orderDescending){
      this.customers = this.customers.sort((a, b) => {
        if (a[sortParam] < b[sortParam])
          return 1;
        if (a[sortParam] > b[sortParam])
          return -1;
        return 0;
      });
      this.orderDescending = !this.orderDescending;
    }
    else{
      this.customers = this.customers.sort((a, b) => {
        if (a[sortParam] < b[sortParam])
          return -1;
        if (a[sortParam] > b[sortParam])
          return 1;
      });
      this.orderDescending = !this.orderDescending;
    }
  }

  NavigateToDetails(nip: string){
    this.router.navigate(['customer/details', nip]);
  }
}
