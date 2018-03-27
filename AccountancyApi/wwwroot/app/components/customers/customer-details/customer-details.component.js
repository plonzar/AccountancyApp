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
var user_services_1 = require("../../../services/user services/user.services");
var customer_services_1 = require("./../../../services/customer services/customer.services");
var CustomerDetailsComponent = /** @class */ (function () {
    function CustomerDetailsComponent(activeRoute, router, customerService, userService) {
        this.activeRoute = activeRoute;
        this.router = router;
        this.customerService = customerService;
        this.userService = userService;
        this.customer = new customer_model_1.Customer();
        this.userService.CheckTokenExpired();
    }
    CustomerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.nip = params['nip'];
            if (_this.customerService.GetCustomerByNip(_this.nip) == undefined) {
                _this.router.navigate(['/']);
            }
            else {
                _this.customer = _this.customerService.GetCustomerByNip(_this.nip);
            }
        });
    };
    CustomerDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-customer-details',
            templateUrl: './customer-details.component.html',
            styleUrls: ['./customer-details.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, customer_services_1.CustomerServices, user_services_1.UserServices])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());
exports.CustomerDetailsComponent = CustomerDetailsComponent;
//# sourceMappingURL=customer-details.component.js.map