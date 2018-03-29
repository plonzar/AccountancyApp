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

  
}