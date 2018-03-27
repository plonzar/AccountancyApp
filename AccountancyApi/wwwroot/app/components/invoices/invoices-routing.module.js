"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var invoice_component_1 = require("./invoice/invoice.component");
var invoice_details_component_1 = require("./invoice-details/invoice-details.component");
var invoice_edit_component_1 = require("./invoice-edit/invoice-edit.component");
var core_1 = require("@angular/core");
var can_activate_guard_service_1 = require("../../services/local authorization/can-activate-guard.service");
var invoicesRouting = [
    { path: 'invoice', component: invoice_component_1.InvoiceComponent, canActivate: [can_activate_guard_service_1.CanActivateGuard] },
    { path: 'invoice/details', component: invoice_details_component_1.InvoiceDetailsComponent, canActivate: [can_activate_guard_service_1.CanActivateGuard] },
    { path: 'invoice/add', component: invoice_edit_component_1.InvoiceEditComponent, canActivate: [can_activate_guard_service_1.CanActivateGuard] },
    { path: 'invoice/edit/:id', component: invoice_edit_component_1.InvoiceEditComponent, canActivate: [can_activate_guard_service_1.CanActivateGuard] },
];
var InvoicesRoutingModule = /** @class */ (function () {
    function InvoicesRoutingModule() {
    }
    InvoicesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(invoicesRouting)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], InvoicesRoutingModule);
    return InvoicesRoutingModule;
}());
exports.InvoicesRoutingModule = InvoicesRoutingModule;
//# sourceMappingURL=invoices-routing.module.js.map