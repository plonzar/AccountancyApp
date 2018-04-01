import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from './../../../../../services/email service/email.service';
import { AutoConfig } from './../../../../../models/auto-config.model';
import { EmailServiceProviders } from './../../../../../enums/email-service-providers.enum';
import { SmtpConfigurationModel } from '../../../../../models/smtp-configuration.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-help-auto-config',
  templateUrl: './help-auto-config.component.html',
  styleUrls: ['./help-auto-config.component.css'],
  providers: [EmailServiceProviders]
})
export class HelpAutoConfigComponent implements OnInit {

  config: AutoConfig = new AutoConfig();
  smtpConfig: SmtpConfigurationModel;
  changingStart:boolean = false;
  smtpChangSub: Subscription;
  constructor(public emailProviders: EmailServiceProviders, private emailService: EmailService) { }

  ngOnInit() {
  }

  Autoconfig(){
    this.changingStart = true;
    this.emailService.SmtpAutoConfig(this.config);
    this.smtpChangSub = this.emailService.autoConfigResult.subscribe(
      (result) => {
        if(result != null){
          this.smtpConfig = result;
          alert("Konfiguracja ukończona pomyślnie.\n\nTwoje ustawienia to:\n\nHost: " 
          + this.smtpConfig.host 
          + "\nEmail:" + this.smtpConfig.username 
          + "\nSSL: " + (this.smtpConfig.sslEnabled ? "Tak": "Nie") 
          + "\nPort: " + this.smtpConfig.port);
        }
        this.changingStart = false;
        this.smtpChangSub.unsubscribe();
      }
    )
  }

}
