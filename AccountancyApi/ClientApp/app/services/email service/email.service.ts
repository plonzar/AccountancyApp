import { AutoConfig } from './../../models/auto-config.model';
import { EmailHttpService } from './email-http.service';
import { EmailMessageModel } from './../../models/email-message.model';
import { Injectable } from '@angular/core';
import { SmtpConfigurationModel } from '../../models/smtp-configuration.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EmailService {

  smtpSettingsChanged: Subject<boolean> = new Subject<boolean>();
  autoConfigResult:  Subject<SmtpConfigurationModel> = new Subject<SmtpConfigurationModel>();

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

  ChangeSmtpSettings(settings: SmtpConfigurationModel){
    this.emailHttp.ChangeSmtpSettings(settings).subscribe(
      (response) => {
        this.smtpSettingsChanged.next(true);
        return true;
      },
      (error) => {
        alert("wystąpił błąd");
        this.smtpSettingsChanged.next(false);
        return false;
      }
    );
  }

  ResetDefaults(){
    this.emailHttp.ResetDefaults().subscribe(
      (response) => {
        this.smtpSettingsChanged.next(true);
        return true;
      },
      (error) => {
        alert("wystąpił błąd");
        this.smtpSettingsChanged.next(false);
        return false;
      }
    )
  }

  SmtpAutoConfig(config: AutoConfig){
    this.emailHttp.SmtpAutoConfig(config).subscribe(
      (result) => {
        this.autoConfigResult.next(result);
        console.log("autoConfigResult");
      },
      (error) => {
        this.autoConfigResult.next(null);
        alert("Błędna konfiguracja");
      }
    );
  }
}