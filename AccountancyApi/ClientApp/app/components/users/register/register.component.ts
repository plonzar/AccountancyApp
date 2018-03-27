import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterModel } from './../../../models/register.model';
import { NgForm } from '@angular/forms';
import { UserHttpServices } from '../../../services/user services/user.http.services';
import { UserServices } from './../../../services/user services/user.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData: RegisterModel = new RegisterModel();
  @ViewChild('registerForm') registerForm: NgForm;

  constructor(private userHttpService: UserHttpServices,private userService: UserServices) { 
  }

  ngOnInit() {
  }

  Register(){
    this.registerData.address = this.registerForm.value.address;
    this.registerData.city = this.registerForm.value.city;
    this.registerData.email = this.registerForm.value.email;
    this.registerData.name = this.registerForm.value.name;
    this.registerData.nip = this.registerForm.value.nip;
    this.registerData.password = this.registerForm.value.password;
    this.registerData.postCode = this.registerForm.value.postCode;
    this.registerData.userName = this.registerForm.value.userName;
    this.registerData.specialKey = this.registerForm.value.specialKey;

    this.userService.Register(this.registerData);
  }

  IsAvailable(parameterType: string, parameterValue: string){
    let toValidateArray: string[] = [];
    if(parameterValue != undefined && parameterValue != ''){
      toValidateArray.push(parameterType);
      toValidateArray.push(parameterValue);
      this.userHttpService.IsAvailabel(toValidateArray).subscribe(
        (isAvaliable) => {
          if(!isAvaliable){
            this.registerForm.form.controls[parameterType].setErrors({'incorrect': true});
            alert("Nazwa zajęta");
          }
        }
      );
    };
  }

}
