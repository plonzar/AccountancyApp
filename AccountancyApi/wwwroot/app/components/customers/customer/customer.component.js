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
var customer_services_1 = require("../../../services/customer services/customer.services");
var user_services_1 = require("./../../../services/user services/user.services");
var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(customerService, router, userService) {
        this.customerService = customerService;
        this.router = router;
        this.userService = userService;
        this.customers = [];
        this.searchParam = '';
        this.orderDescending = false;
        this.customers = this.customerService.customers;
        if (this.userService.userInactive) {
            this.userService.CheckTokenExpired();
            this.userService.ResetActiveTimer();
        }
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.customersChanged.subscribe(function (customers) {
            _this.customers = customers;
        });
    };
    CustomerComponent.prototype.SortCustomers = function (sortParam) {
        if (this.orderDescending) {
            this.customers = this.customers.sort(function (a, b) {
                if (a[sortParam] < b[sortParam])
                    return 1;
                if (a[sortParam] > b[sortParam])
                    return -1;
                return 0;
            });
            this.orderDescending = !this.orderDescending;
        }
        else {
            this.customers = this.customers.sort(function (a, b) {
                if (a[sortParam] < b[sortParam])
                    return -1;
                if (a[sortParam] > b[sortParam])
                    return 1;
            });
            this.orderDescending = !this.orderDescending;
        }
    };
    CustomerComponent.prototype.NavigateToDetails = function (nip) {
        this.router.navigate(['customer/details', nip]);
    };
    CustomerComponent = __decorate([
        core_1.Component({
            selector: 'app-customer',
            templateUrl: './customer.component.html',
            styleUrls: ['./customer.component.css']
        }),
        __metadata("design:paramtypes", [customer_services_1.CustomerServices, router_1.Router, user_services_1.UserServices])
    ], CustomerComponent);
    return CustomerComponent;
}());
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=customer.component.js.map