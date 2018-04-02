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
var customer_services_1 = require("./services/customer services/customer.services");
var invoice_services_1 = require("./services/invoice services/invoice.services");
var user_services_1 = require("./services/user services/user.services");
var common_service_1 = require("./services/common.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(customerServices, invoiceServices, userService, commonData) {
        this.customerServices = customerServices;
        this.invoiceServices = invoiceServices;
        this.userService = userService;
        this.commonData = commonData;
        this.title = 'Księgowość';
        this.width = window.innerWidth;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.signedIn = this.userService.signedIn;
        this.userService.signinStatusChanged.subscribe(function (value) {
            _this.signedIn = value;
            if (_this.signedIn) {
                _this.customerServices.SetCustomersHttp();
                _this.invoiceServices.SetInvoiceshttp();
                _this.userService.StartActiveTimer();
            }
            else {
                _this.invoiceServices.invoices = [];
                _this.customerServices.customers = [];
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: []
        }),
        __metadata("design:paramtypes", [customer_services_1.CustomerServices,
            invoice_services_1.InvoiceServices,
            user_services_1.UserServices,
            common_service_1.CommonService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map