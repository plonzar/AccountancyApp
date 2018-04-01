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

  constructor(private userService: UserServices) {}

  ngOnInit() {
    this.userService.CheckTokenExpired();
  }
}
