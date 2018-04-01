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
var forms_1 = require("@angular/forms");
var user_services_1 = require("../../../../services/user services/user.services");
var change_password_model_1 = require("../../../../models/change-password.model");
var PasswordEditComponent = /** @class */ (function () {
    function PasswordEditComponent(userService) {
        this.userService = userService;
        this.oldPassword = '';
        this.newPassword = '';
        this.passwordData = new change_password_model_1.ChangePasswordModel();
    }
    PasswordEditComponent.prototype.ngOnInit = function () {
    };
    PasswordEditComponent.prototype.UpdatePassword = function () {
        this.passwordData.password = this.oldPassword;
        this.passwordData.newPassword = this.newPassword;
        this.userService.ChangePassword(this.passwordData);
        this.passwordForm.reset();
    };
    __decorate([
        core_1.ViewChild('userPasswordForm'),
        __metadata("design:type", forms_1.NgForm)
    ], PasswordEditComponent.prototype, "passwordForm", void 0);
    PasswordEditComponent = __decorate([
        core_1.Component({
            selector: 'app-password-edit',
            templateUrl: './password-edit.component.html',
            styleUrls: ['./password-edit.component.css']
        }),
        __metadata("design:paramtypes", [user_services_1.UserServices])
    ], PasswordEditComponent);
    return PasswordEditComponent;
}());
exports.PasswordEditComponent = PasswordEditComponent;
//# sourceMappingURL=password-edit.component.js.map