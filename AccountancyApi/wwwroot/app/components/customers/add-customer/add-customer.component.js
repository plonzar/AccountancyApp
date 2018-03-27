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
var router_1 = require("@angular/router");
var customer_model_1 = require("../../../models/customer.model");
var customer_services_1 = require("../../../services/customer services/customer.services");
var user_services_1 = require("./../../../services/user services/user.services");
var AddCustomerComponent = /** @class */ (function () {
    function AddCustomerComponent(customerService, router, userService) {
        this.customerService = customerService;
        this.router = router;
        this.userService = userService;
        this.customer = new customer_model_1.Customer();
        this.userService.CheckTokenExpired();
    }
    AddCustomerComponent.prototype.ngOnInit = function () {
    };
    AddCustomerComponent.prototype.AddCustomer = function () {
        if (this.AddCustomerForm.valid) {
            this.customerService.AddCustomer(this.customer);
            this.router.navigate(['/customer']);
        }
    };
    AddCustomerComponent.prototype.ResetCustomerForm = function () {
        this.AddCustomerForm.reset();
    };
    __decorate([
        core_1.ViewChild('AddCustomerForm'),
        __metadata("design:type", forms_1.NgForm)
    ], AddCustomerComponent.prototype, "AddCustomerForm", void 0);
    AddCustomerComponent = __decorate([
        core_1.Component({
            selector: 'app-add-customer',
            templateUrl: './add-customer.component.html',
            styleUrls: ['./add-customer.component.css']
        }),
        __metadata("design:paramtypes", [customer_services_1.CustomerServices, router_1.Router, user_services_1.UserServices])
    ], AddCustomerComponent);
    return AddCustomerComponent;
}());
exports.AddCustomerComponent = AddCustomerComponent;
//# sourceMappingURL=add-customer.component.js.map