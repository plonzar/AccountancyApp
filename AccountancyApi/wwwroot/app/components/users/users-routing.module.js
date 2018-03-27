"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var user_edit_component_1 = require("./user-edit/user-edit.component");
var can_activate_guard_service_1 = require("../../services/local authorization/can-activate-guard.service");
var usersRouting = [
    { path: 'user/login', component: login_component_1.LoginComponent },
    { path: 'user/register', component: register_component_1.RegisterComponent },
    { path: 'user/edit', component: user_edit_component_1.UserEditComponent, canActivate: [can_activate_guard_service_1.CanActivateGuard] }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(usersRouting)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());
exports.UsersRoutingModule = UsersRoutingModule;
//# sourceMappingURL=users-routing.module.js.map