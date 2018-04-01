import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../../models/user.model';
import { UserServices } from '../../../../services/user services/user.services';

@Component({
  selector: 'app-user-data-edit',
  templateUrl: './user-data-edit.component.html',
  styleUrls: ['./user-data-edit.component.css']
})
export class UserDataEditComponent implements OnInit {

  user: UserModel;

  constructor(private userService: UserServices) {
    this.user = this.userService.userData;
   }

  ngOnInit() {
  }

  UpdateUserData(){
    this.userService.ChangeUserData(this.user);
  }
}
