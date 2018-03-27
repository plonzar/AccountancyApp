import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { CanActivateGuard } from '../../services/local authorization/can-activate-guard.service';

const usersRouting: Routes = [
  {path: 'user/login', component: LoginComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'user/edit', component: UserEditComponent, canActivate: [CanActivateGuard]}
]

@NgModule({
  imports:[
    RouterModule.forChild(usersRouting)
  ],
  exports:[
    RouterModule
  ]
})
export class UsersRoutingModule{}