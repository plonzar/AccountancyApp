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
var customer_component_1 = require("./customer/customer.component");
var add_customer_component_1 = require("./add-customer/add-customer.component");
var customer_details_component_1 = require("./customer-details/customer-details.component");
var customer_edit_component_1 = require("./customer-edit/customer-edit.component");
var customer_invoices_component_1 = require("./customer-invoices/customer-invoices.component");
var can_activate_guard_service_1 = require("../../services/local authorization/can-activate-guard.service");
var customersRouting = [
    { path: 'customer', component: customer_component_1.CustomerComponent, canActivate: [can_activate_guard_service_1.CanActivateGuard] },
    { path: 'customer/add', component: add_customer_component_1.AddCustomerComponent, canActivate: [can_activate_guard_service_1.CanActivateGuard] },
    { path: 'customer/details/:nip', component: customer_details_component_1.CustomerDetailsComponent, children: [
            { path: 'edit', component: customer_edit_component_1.CustomerEditComponent, canActivate: [can_activate_guard_service_1.CanActivateGuard] },
            { path: 'invoices', component: customer_invoices_component_1.CustomerInvoicesComponent, canActivate: [can_activate_guard_service_1.CanActivateGuard] },
        ], canActivate: [can_activate_guard_service_1.CanActivateGuard] },
];
var CustomersRoutingModule = /** @class */ (function () {
    function CustomersRoutingModule() {
    }
    CustomersRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(customersRouting)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], CustomersRoutingModule);
    return CustomersRoutingModule;
}());
exports.CustomersRoutingModule = CustomersRoutingModule;
//# sourceMappingURL=customers-routing.module.js.map