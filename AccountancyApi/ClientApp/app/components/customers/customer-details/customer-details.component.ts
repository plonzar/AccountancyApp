import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Customer } from '../../../models/customer.model';
import { UserServices } from '../../../services/user services/user.services';
import { CustomerServices } from './../../../services/customer services/customer.services';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer: Customer = new Customer();
  nip: string;

  constructor(private activeRoute: ActivatedRoute, private router: Router ,private customerService: CustomerServices, private userService: UserServices) {
    this.userService.CheckTokenExpired();
   }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.nip = params['nip'];
        if(this.customerService.GetCustomerByNip(this.nip) == undefined){
          this.router.navigate(['/']);
        }
        else{
          this.customer = this.customerService.GetCustomerByNip(this.nip);
        }
      });
  }

}
