import { EmailHttpService } from './email-http.service';
import { EmailMessageModel } from './../../models/email-message.model';
import { Injectable } from '@angular/core';

@Injectable()
export class EmailService {

  constructor(private emailHttp: EmailHttpService) { }

  SendMessage(message: EmailMessageModel){
    this.emailHttp.SendEmail(message).subscribe(
      (response) => {
        alert("Wiadomość wysła na pomyślnie");
      },
      (error) => {
        alert("Nie udało się wysłać");
      }
      
    );
  }
}