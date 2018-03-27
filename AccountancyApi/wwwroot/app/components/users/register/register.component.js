"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var register_model_1 = require("./../../../models/register.model");
var forms_1 = require("@angular/forms");
var user_http_services_1 = require("../../../services/user services/user.http.services");
var user_services_1 = require("./../../../services/user services/user.services");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userHttpService, userService) {
        this.userHttpService = userHttpService;
        this.userService = userService;
        this.registerData = new register_model_1.RegisterModel();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.Register = function () {
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
    };
    RegisterComponent.prototype.IsAvailable = function (parameterType, parameterValue) {
        var _this = this;
        var toValidateArray = [];
        if (parameterValue != undefined && parameterValue != '') {
            toValidateArray.push(parameterType);
            toValidateArray.push(parameterValue);
            this.userHttpService.IsAvailabel(toValidateArray).subscribe(function (isAvaliable) {
                if (!isAvaliable) {
                    _this.registerForm.form.controls[parameterType].setErrors({ 'incorrect': true });
                    alert("Nazwa zajęta");
                }
            });
        }
        ;
    };
    __decorate([
        core_1.ViewChild('registerForm'),
        __metadata("design:type", forms_1.NgForm)
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }),
        __metadata("design:paramtypes", [user_http_services_1.UserHttpServices, user_services_1.UserServices])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map