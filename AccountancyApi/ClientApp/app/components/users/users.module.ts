import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserEditComponent
,
    UserEditComponent
],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule{}