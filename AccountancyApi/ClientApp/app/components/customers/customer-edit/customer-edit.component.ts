import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Customer } from '../../../models/customer.model';
import { CustomerServices } from '../../../services/customer services/customer.services';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  nip:string;
  customer: Customer;
  @ViewChild('customerForm') editForm : NgForm

  constructor(private activeRoute: ActivatedRoute, private customerService: CustomerServices, private router: Router) {
    this.activeRoute.queryParams.subscribe(
      params => {
       this.nip = params['nip'];
       this.customer = this.customerService.GetCustomerByNip(this.nip);
      }
    );
   }

  ngOnInit() {
  }

  UpdateCustomerData(){
    this.customer.name = this.editForm.value.Name;
    this.customer.city = this.editForm.value.City;
    this.customer.address = this.editForm.value.Street;
    this.customer.postCode = this.editForm.value.PostCode;
    this.customer.email = this.editForm.value.Email;
    this.customer.nip = this.editForm.value.NIP;
    if(this.editForm.valid){
      this.customerService.UpdateCustomer(this.customer);
      this.router.navigate(['/customer']);
    }
  }
}
