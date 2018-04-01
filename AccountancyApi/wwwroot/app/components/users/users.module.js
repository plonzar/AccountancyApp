"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var users_routing_module_1 = require("./users-routing.module");
var user_edit_component_1 = require("./user-edit/user-edit.component");
var password_edit_component_1 = require("./user-edit/password-edit/password-edit.component");
var user_data_edit_component_1 = require("./user-edit/user-data-edit/user-data-edit.component");
var smtp_configuration_component_1 = require("./user-edit/smtp-configuration/smtp-configuration.component");
var help_info_component_1 = require("./user-edit/smtp-configuration/help-info/help-info.component");
var help_auto_config_component_1 = require("./user-edit/smtp-configuration/help-auto-config/help-auto-config.component");
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        core_1.NgModule({
            declarations: [
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                user_edit_component_1.UserEditComponent,
                password_edit_component_1.PasswordEditComponent,
                user_data_edit_component_1.UserDataEditComponent,
                smtp_configuration_component_1.SmtpConfigurationComponent,
                help_info_component_1.HelpInfoComponent,
                help_auto_config_component_1.HelpAutoConfigComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                users_routing_module_1.UsersRoutingModule
            ]
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map