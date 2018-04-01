import { AutoConfig } from './../../models/auto-config.model';
import { SmtpConfigurationModel } from './../../models/smtp-configuration.model';
import { Injectable } from '@angular/core';
import { CommonService } from './../common.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmailMessageModel } from './../../models/email-message.model';

@Injectable()
export class EmailHttpService {

constructor(private commonData : CommonService, private httpService: HttpClient) { }

  SendEmail(mesageConfig: EmailMessageModel){
    return this.httpService.post<any>("api/email/SendMail", mesageConfig,
    {headers: new HttpHeaders().set( 'Authorization',"Bearer " + this.commonData.token['token'])});
  }

  ChangeSmtpSettings(settings: SmtpConfigurationModel){
    return this.httpService.post<any>("api/email/ChangeEmailConfiguration", settings,
    {headers: new HttpHeaders().set( 'Authorization',"Bearer " + this.commonData.token['token'])});
  }

  ResetDefaults(){
    return this.httpService.post<any>("api/email/ResetSmtpSettings", null,
    {headers: new HttpHeaders().set( 'Authorization',"Bearer " + this.commonData.token['token'])});
  }

  SmtpAutoConfig(config: AutoConfig){
    return this.httpService.post<SmtpConfigurationModel>("api/email/EmailAutoConfig", config,
    {headers: new HttpHeaders().set( 'Authorization',"Bearer " + this.commonData.token['token'])});
  }
}