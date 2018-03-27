
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../../../models/customer.model';
import { CustomerServices } from '../../../services/customer services/customer.services';
import { UserServices } from './../../../services/user services/user.services';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  @ViewChild('AddCustomerForm') AddCustomerForm: NgForm;
  customer: Customer = new Customer();

  constructor(private customerService: CustomerServices, private router: Router, private userService: UserServices) {
    this.userService.CheckTokenExpired();
   }

  ngOnInit() {
  }

  AddCustomer(){
    if(this.AddCustomerForm.valid){
      this.customerService.AddCustomer(this.customer);
      this.router.navigate(['/customer']);
    }
  }

  ResetCustomerForm(){
    this.AddCustomerForm.reset();
  }
}
