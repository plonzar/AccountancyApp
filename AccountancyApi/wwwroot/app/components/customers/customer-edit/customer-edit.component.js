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
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var customer_services_1 = require("../../../services/customer services/customer.services");
var CustomerEditComponent = /** @class */ (function () {
    function CustomerEditComponent(activeRoute, customerService, router) {
        var _this = this;
        this.activeRoute = activeRoute;
        this.customerService = customerService;
        this.router = router;
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.nip = params['nip'];
            _this.customer = _this.customerService.GetCustomerByNip(_this.nip);
        });
    }
    CustomerEditComponent.prototype.ngOnInit = function () {
    };
    CustomerEditComponent.prototype.UpdateCustomerData = function () {
        this.customer.name = this.editForm.value.Name;
        this.customer.city = this.editForm.value.City;
        this.customer.address = this.editForm.value.Street;
        this.customer.postCode = this.editForm.value.PostCode;
        this.customer.email = this.editForm.value.Email;
        this.customer.nip = this.editForm.value.NIP;
        if (this.editForm.valid) {
            this.customerService.UpdateCustomer(this.customer);
            this.router.navigate(['/customer']);
        }
    };
    __decorate([
        core_1.ViewChild('customerForm'),
        __metadata("design:type", forms_1.NgForm)
    ], CustomerEditComponent.prototype, "editForm", void 0);
    CustomerEditComponent = __decorate([
        core_1.Component({
            selector: 'app-customer-edit',
            templateUrl: './customer-edit.component.html',
            styleUrls: ['./customer-edit.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, customer_services_1.CustomerServices, router_1.Router])
    ], CustomerEditComponent);
    return CustomerEditComponent;
}());
exports.CustomerEditComponent = CustomerEditComponent;
//# sourceMappingURL=customer-edit.component.js.map