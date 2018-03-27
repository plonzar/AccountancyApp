import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './../components/users/login/login.component';
import { InvoicesModule } from '../components/invoices/invoices.module';

const appRoutes: Routes = [
  {path: 'customer', loadChildren: '../components/customers/customers.module#CustomersModule'},
  {path: 'invoice', loadChildren: '../components/invoices/invoices.module#InvoicesModule'},
  {path: 'user', loadChildren: '../components/users/users.module#UsersModule'},
  {path: '**', redirectTo: 'invoice', pathMatch: 'full'}
]

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports:[RouterModule]
})
export class RoutingModule { }