import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServices } from '../../../../services/user services/user.services';
import { ChangePasswordModel } from '../../../../models/change-password.model';

@Component({
  selector: 'app-password-edit',
  templateUrl: './password-edit.component.html',
  styleUrls: ['./password-edit.component.css']
})
export class PasswordEditComponent implements OnInit {

  @ViewChild('userPasswordForm') passwordForm: NgForm;
  
  oldPassword: string = '';
  newPassword: string = '';
  passwordData: ChangePasswordModel = new ChangePasswordModel();
  
  constructor(private userService: UserServices) {
   }

  ngOnInit() {
  }

  UpdatePassword(){
    this.passwordData.password = this.oldPassword;
    this.passwordData.newPassword = this.newPassword;
    this.userService.ChangePassword(this.passwordData);
    this.passwordForm.reset();
  }

}
