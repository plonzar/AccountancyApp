import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserEditComponent } from './user-edit/user-edit.component';
import { PasswordEditComponent } from './user-edit/password-edit/password-edit.component';
import { UserDataEditComponent } from './user-edit/user-data-edit/user-data-edit.component';
import { SmtpConfigurationComponent } from './user-edit/smtp-configuration/smtp-configuration.component';
import { HelpInfoComponent } from './user-edit/smtp-configuration/help-info/help-info.component';
import { HelpAutoConfigComponent } from './user-edit/smtp-configuration/help-auto-config/help-auto-config.component';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserEditComponent,
    PasswordEditComponent,
    UserDataEditComponent,
    SmtpConfigurationComponent,
    HelpInfoComponent,
    HelpAutoConfigComponent
],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule{}