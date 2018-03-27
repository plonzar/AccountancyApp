//#region import
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { UserModel } from './../../models/user.model';
import { LoginModel } from '../../models/login.model';
import { TokenModel } from './../../models/token.model';
import { CommonService } from '../common.service';
import { UserHttpServices } from './user.http.services';
import { ChangePasswordModel } from './../../models/change-password.model';
import { HttpErrorResponse } from "@angular/common/http";
import { RegisterModel } from "../../models/register.model";
//#endregion

@Injectable()
export class UserServices{

  //#region properties

  signedIn : boolean = false;
  signinStatusChanged: Subject<boolean> = new Subject<boolean>();
  userInactive = false;
  activeTimer;
  userData: UserModel = new UserModel();
  loginData: LoginModel = new LoginModel();

  //#endregion
  
  constructor(private userHttp: UserHttpServices, private router: Router, private commonData: CommonService) {}

  Login(loginData : LoginModel){
    this.userHttp.Login(loginData).subscribe(
      (response) => {
        this.loginData = loginData;
        this.userData = response;
        this.signedIn = true;

        this.userHttp.GetToken(loginData).subscribe(
          (response) => {
            this.commonData.token = response;         
            this.signinStatusChanged.next(this.signedIn);
          }
        );

        this.router.navigate(["/invoice"]);
      },
      (error) => {
        this.signedIn = false; 
        this.signinStatusChanged.next(this.signedIn);
        if(error['error'] == "Bad username or password"){
          alert("Złe dane logowania");
        }
      }
    );
  }

  LogOut(){
    this.userHttp.LogOut().subscribe(
      () => {
        this.ClearData();
        this.router.navigate(['/user/login']);
      },
      (error) => {       
        this.ClearData();
        this.router.navigate(['/user/login']);
        
      }
    );
  }

  Register(regsiterData: RegisterModel){
    this.userHttp.Register(regsiterData).subscribe(
      () => {
        alert("Zarejstrowano pomyslnie");
        this.router.navigate(['/user/login']);
      },
      (error) => {
        if(error.error == "Register is locked"){
          alert("Nie posiadasz uprawnienień aby dokonać rejestracji");
          return;
        }
        if(error.error == "Invalid data"){
          alert("Wprowadzone dane są błędne");
          return;
        }

        alert("Błąd połączenia z serwerem");
        return;
      }
    )
  }

  GetToken(loginData : LoginModel){
    this.userHttp.GetToken(loginData).subscribe(
      (response) => {
        this.commonData.token = response;
      },
      (error) => {
        if(this.signedIn)
          this.LogOut();
      })
  }

  ChangePassword(newData: ChangePasswordModel){
    this.userHttp.ChangePassword(newData).subscribe(
      () => {
        this.loginData.password = newData.password;
        alert("Zaktualizowano hasło");
      },
      (error) => {
        if(error.status == "401"){
          this.LogOut();
          return;
        }
        alert("Błąd połączenia z serwerem");
      }
    );
  }

  ChangeUserData(newData: UserModel){
    this.userHttp.ChangeUserData(newData).subscribe(
      () => {
        this.userData = newData;
        alert("Zaktualizowano Twoje dane");
      },
      (error) => {
        if(error.status == "401"){
          this.LogOut();
          return;
        }
        alert("Błąd połączenia z serwerem");
      }
    );
  }

  CheckTokenExpired(){
    if(this.commonData.token['token'] != '' && this.commonData.token != null){
      this.userHttp.TokenExpired().subscribe(
        (notExpired) =>{
          this.GetToken(this.loginData);
        },
        (expired) =>{
          if(this.signedIn)
            this.LogOut();
        });
    }
  }

  StartActiveTimer(){
    this.activeTimer = setTimeout(() => {
      this.userInactive = true;
    }, 60000);
  }

  ResetActiveTimer(){
    clearTimeout(this.activeTimer);
    this.userInactive = false;
    this.StartActiveTimer();
  }

  private ClearData(){
    this.userData = null;
    this.loginData = null;
    this.signedIn = false;
    this.userInactive = false;
    this.commonData.token['token'] = '';
    this.signinStatusChanged.next(this.signedIn);
  }
}