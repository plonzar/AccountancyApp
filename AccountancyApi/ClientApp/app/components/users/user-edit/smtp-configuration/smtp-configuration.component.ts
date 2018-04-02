import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SmtpConfigurationModel } from '../../../../models/smtp-configuration.model';
import { EmailService } from './../../../../services/email service/email.service';

@Component({
  selector: 'app-smtp-configuration',
  templateUrl: './smtp-configuration.component.html',
  styleUrls: ['./smtp-configuration.component.css']
})
export class SmtpConfigurationComponent implements OnInit{

  @ViewChild('unlockForm') unlockedForm: ElementRef;
  @ViewChild('smtpForm') smtpForm: NgForm;

  smtpConfig: SmtpConfigurationModel = new SmtpConfigurationModel();
  configPage: boolean = false;
  allowedToConfiguration = false;
  changingStart: boolean = false;
  changeSucceded: boolean = false;
  constructor(private emailService: EmailService) { 
  }

  ngOnInit() {
    setTimeout(() => {
      this.smtpForm.form.disable();
    }, 200);
  }

  ActiveForm(){
    if(this.unlockedForm.nativeElement.checked){
      this.smtpForm.form.enable();
    }
    else{
      this.smtpForm.form.disable();
    }
  }

  ChangeSmtp(){
    this.emailService.ChangeSmtpSettings(this.smtpConfig);
    this.changingStart = true;
    this.emailService.smtpSettingsChanged.subscribe(
      (result) => {
        if(result){
          this.changingStart = false;
          this.changeSucceded = result;
          setTimeout(() => {
            this.changeSucceded = false;
          }, 1500);
        }
        else
          this.changingStart = false;
      }
    );
  }

  ResetSmtpSettings(){
    this.emailService.ResetDefaults();
    this.changingStart = true;
    this.emailService.smtpSettingsChanged.subscribe(
      (result) => {
        if(result){
          this.changingStart = false;
          this.changeSucceded = result;
          setTimeout(() => {
            this.changeSucceded = false;
          }, 1500);
        }
        else
          this.changingStart = false;
      }
    );
  }

  changeInfoPage(){
    this.configPage = !this.configPage;
  }
}
