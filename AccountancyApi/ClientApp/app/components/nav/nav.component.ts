import { Component, OnInit } from '@angular/core';
import { UserServices } from './../../services/user services/user.services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private userService: UserServices) { }

  ngOnInit() {

  }

  Logout(){
    this.userService.LogOut();
  }
}
