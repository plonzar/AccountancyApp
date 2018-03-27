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
var router_1 = require("@angular/router");
var customer_model_1 = require("../../../models/customer.model");
var customer_services_1 = require("./../../../services/customer services/customer.services");
var invoice_services_1 = require("../../../services/invoice services/invoice.services");
var CustomerInvoicesComponent = /** @class */ (function () {
    function CustomerInvoicesComponent(customerService, invoiceService, activeRoute) {
        this.customerService = customerService;
        this.invoiceService = invoiceService;
        this.activeRoute = activeRoute;
        this.customer = new customer_model_1.Customer();
        this.invoices = [];
        this.setteledInvoices = [];
    }
    CustomerInvoicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.nip = params['nip'];
            _this.customer = _this.customerService.GetCustomerByNip(_this.nip);
            _this.invoices = _this.invoiceService.invoices.filter(function (i) { return i.customer.nip == _this.nip; });
        });
    };
    CustomerInvoicesComponent.prototype.AddToAccountedList = function (event, invoiceNumber) {
        var index = this.setteledInvoices.indexOf(invoiceNumber);
        if (event.target.checked) {
            if (index == -1)
                this.setteledInvoices.push(invoiceNumber);
        }
        else {
            if (index != -1)
                this.setteledInvoices.splice(index, 1);
        }
    };
    CustomerInvoicesComponent.prototype.SettleInvoices = function () {
        this.invoiceService.SettleInvoices(this.setteledInvoices, this.nip);
    };
    CustomerInvoicesComponent = __decorate([
        core_1.Component({
            selector: 'app-customer-invoices',
            templateUrl: './customer-invoices.component.html',
            styleUrls: ['./customer-invoices.component.css']
        }),
        __metadata("design:paramtypes", [customer_services_1.CustomerServices, invoice_services_1.InvoiceServices, router_1.ActivatedRoute])
    ], CustomerInvoicesComponent);
    return CustomerInvoicesComponent;
}());
exports.CustomerInvoicesComponent = CustomerInvoicesComponent;
//# sourceMappingURL=customer-invoices.component.js.map