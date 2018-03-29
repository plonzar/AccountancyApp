import { EmailMessageModel } from './../../../models/email-message.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from './../../../services/email service/email.service';
import { CustomerServices } from './../../../services/customer services/customer.services';
import { Customer } from './../../../models/customer.model';

@Component({
  selector: 'app-customer-send-email',
  templateUrl: './customer-send-email.component.html',
  styleUrls: ['./customer-send-email.component.css']
})
export class CustomerSendEmailComponent implements OnInit {

  customer: Customer = new Customer();
  message: EmailMessageModel = new EmailMessageModel();

  constructor(private activRoute: ActivatedRoute, private customerService: CustomerServices, private emailService: EmailService) { }

  ngOnInit() {

    this.activRoute.queryParams.subscribe(
      (param) => {
        let nip = param['nip'];
        if(nip != null && nip != undefined)
          this.customer = this.customerService.GetCustomerByNip(nip);
        if(this.customer != null){
          this.message.receiver = this.customer.email;
        }
      }
    );
  }

  SendMessage(){
    console.log(this.message.messageBody);
    
    this.emailService.SendMessage(this.message);
  }


}
