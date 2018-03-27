import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserServices } from './../../../services/user services/user.services';
import { LoginModel } from './../../../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm
  loginData: LoginModel ={
    userName: '',
    password: '',
  }

  constructor(private userService: UserServices, private router: Router) { }

  ngOnInit() {
  }

  Login(){
    this.loginData.userName = this.loginForm.value.userName;
    this.loginData.password = this.loginForm.value.password;
    this.userService.Login(this.loginData);
  }

  NavigateRegister(){
    this.router.navigate(['/user/register'])
  }
}
