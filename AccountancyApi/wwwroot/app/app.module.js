"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//#region import
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var nav_component_1 = require("./components/nav/nav.component");
var http_1 = require("@angular/common/http");
var routing_module_1 = require("./routing/routing.module");
var customers_module_1 = require("./components/customers/customers.module");
var invoices_module_1 = require("./components/invoices/invoices.module");
var users_module_1 = require("./components/users/users.module");
var customer_services_1 = require("./services/customer services/customer.services");
var customer_http_services_1 = require("./services/customer services/customer.http.services");
var invoice_services_1 = require("./services/invoice services/invoice.services");
var invoice_http_services_1 = require("./services/invoice services/invoice.http.services");
var user_services_1 = require("./services/user services/user.services");
var user_http_services_1 = require("./services/user services/user.http.services");
var common_service_1 = require("./services/common.service");
var can_activate_guard_service_1 = require("./services/local authorization/can-activate-guard.service");
//#endregion
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_component_1.NavComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                customers_module_1.CustomersModule,
                invoices_module_1.InvoicesModule,
                users_module_1.UsersModule,
                routing_module_1.RoutingModule,
                http_1.HttpClientModule,
            ],
            providers: [
                common_service_1.CommonService,
                customer_services_1.CustomerServices,
                customer_http_services_1.CustomerHttpServices,
                invoice_services_1.InvoiceServices,
                invoice_http_services_1.InvoiceHttpServices,
                user_services_1.UserServices,
                user_http_services_1.UserHttpServices,
                can_activate_guard_service_1.CanActivateGuard,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map