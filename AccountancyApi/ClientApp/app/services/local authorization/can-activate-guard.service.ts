
import { UserServices } from './../user services/user.services';
import { Injectable } from '@angular/core';
import {Router, CanActivate } from '@angular/router';
@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(private userService: UserServices, private router: Router) {
    
  }
  canActivate(){
    if(this.userService.signedIn){
      return true;
    }
    this.router.navigate(['/user/login'])
    return false;
  }
}