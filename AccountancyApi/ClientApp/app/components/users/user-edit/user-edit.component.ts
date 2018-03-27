import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from './../../../models/user.model';
import { UserServices } from './../../../services/user services/user.services';
import { ChangePasswordModel } from './../../../models/change-password.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @ViewChild('userPasswordForm') passwordForm: NgForm;
  user: UserModel;
  oldPassword: string = '';
  newPassword: string = '';
  passwordData: ChangePasswordModel = new ChangePasswordModel();
  constructor(private userService: UserServices) {
    this.user = this.userService.userData;
   }

  ngOnInit() {
    this.userService.CheckTokenExpired();
  }

  UpdatePassword(){
    this.passwordData.password = this.oldPassword;
    this.passwordData.newPassword = this.newPassword;
    this.userService.ChangePassword(this.passwordData);
    this.passwordForm.reset();
  }

  UpdateUserData(){
    this.userService.ChangeUserData(this.user);
  }
}
