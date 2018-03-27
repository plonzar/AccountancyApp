import { ChangePasswordModel } from './../../models/change-password.model';
import { RegisterModel } from './../../models/register.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserServices } from './user.services';
import { UserModel } from './../../models/user.model';
import { CommonService } from './../common.service';
import { LoginModel } from '../../models/login.model';
import { TokenModel } from '../../models/token.model';

@Injectable()
export class UserHttpServices{
  constructor(private userHttp: HttpClient, private userService: HttpClient, private commonData: CommonService) {}

  Login(loginData: LoginModel){
    return this.userHttp.post<UserModel>("api/account/Login", loginData);
  }

  LogOut(){
    return this.userHttp.post<any>("api/account/Logout", null, 
    {headers: new HttpHeaders().set( 'Authorization',"Bearer " + this.commonData.token['token'])});
  }

  Register(registerData: RegisterModel){
    return this.userHttp.post<any>("api/account/Register", registerData);
  }

  ChangePassword(passwordData: ChangePasswordModel){
    return this.userHttp.post<any>("api/account/ChangePassword", passwordData,
    {headers: new HttpHeaders().set( 'Authorization',"Bearer " + this.commonData.token['token'])});
  }

  ChangeUserData(userData: UserModel){
    return this.userHttp.post<any>("api/account/UpdateUser", userData, 
    {headers: new HttpHeaders().set('Authorization',"Bearer " + this.commonData.token['token'])});
  }

  GetToken(loginData: LoginModel){
    return this.userHttp.post<TokenModel>("/api/account/CreateToken", loginData);
  }

  TokenExpired(){
    return this.userHttp.post<any>("/api/account/CheckIfExpired", null,
    {headers: new HttpHeaders().set( 'Authorization',"Bearer " + this.commonData.token['token'])})
  }

  IsAvailabel(paramsArray: string[]){
    return this.userHttp.post<boolean>('/api/account/IsAvailable', paramsArray);
  }
}