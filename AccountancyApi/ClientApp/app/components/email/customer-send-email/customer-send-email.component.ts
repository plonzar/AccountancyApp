import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Customer } from './../../../models/customer.model';
import { EmailMessageModel } from './../../../models/email-message.model';
import { CustomerServices } from './../../../services/customer services/customer.services';
import { EmailService } from './../../../services/email service/email.service';


@Component({
  selector: 'app-customer-send-email',
  templateUrl: './customer-send-email.component.html',
  styleUrls: ['./customer-send-email.component.css']
})
export class CustomerSendEmailComponent implements OnInit {

  customer: Customer = new Customer();
  message: EmailMessageModel = new EmailMessageModel();

  constructor(private activRoute: ActivatedRoute,private location: Location, private customerService: CustomerServices, private emailService: EmailService) { }

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
    this.emailService.SendMessage(this.message);
    this.location.back();
  }
}
