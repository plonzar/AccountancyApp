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
var common_1 = require("@angular/common");
var customer_model_1 = require("./../../../models/customer.model");
var email_message_model_1 = require("./../../../models/email-message.model");
var customer_services_1 = require("./../../../services/customer services/customer.services");
var email_service_1 = require("./../../../services/email service/email.service");
var CustomerSendEmailComponent = /** @class */ (function () {
    function CustomerSendEmailComponent(activRoute, location, customerService, emailService) {
        this.activRoute = activRoute;
        this.location = location;
        this.customerService = customerService;
        this.emailService = emailService;
        this.customer = new customer_model_1.Customer();
        this.message = new email_message_model_1.EmailMessageModel();
    }
    CustomerSendEmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activRoute.queryParams.subscribe(function (param) {
            var nip = param['nip'];
            if (nip != null && nip != undefined)
                _this.customer = _this.customerService.GetCustomerByNip(nip);
            if (_this.customer != null) {
                _this.message.receiver = _this.customer.email;
            }
        });
    };
    CustomerSendEmailComponent.prototype.SendMessage = function () {
        this.emailService.SendMessage(this.message);
        this.location.back();
    };
    CustomerSendEmailComponent = __decorate([
        core_1.Component({
            selector: 'app-customer-send-email',
            templateUrl: './customer-send-email.component.html',
            styleUrls: ['./customer-send-email.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, common_1.Location, customer_services_1.CustomerServices, email_service_1.EmailService])
    ], CustomerSendEmailComponent);
    return CustomerSendEmailComponent;
}());
exports.CustomerSendEmailComponent = CustomerSendEmailComponent;
//# sourceMappingURL=customer-send-email.component.js.map