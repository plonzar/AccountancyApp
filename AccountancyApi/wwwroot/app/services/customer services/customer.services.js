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
var Subject_1 = require("rxjs/Subject");
var user_services_1 = require("./../user services/user.services");
var customer_http_services_1 = require("./customer.http.services");
var CustomerServices = /** @class */ (function () {
    function CustomerServices(customerHttp, userService) {
        this.customerHttp = customerHttp;
        this.userService = userService;
        this.customers = [];
        this.customersChanged = new Subject_1.Subject();
    }
    //http setting customers Array on app start
    CustomerServices.prototype.SetCustomersHttp = function () {
        var _this = this;
        this.customerHttp.GetAll().subscribe(function (response) {
            _this.customers = response;
            _this.customersChanged.next(_this.customers);
        }, function (error) {
            if (error.status == "401") {
                _this.userService.LogOut();
                return;
            }
        });
        return this.customers;
    };
    CustomerServices.prototype.AddCustomer = function (newCustomer) {
        var _this = this;
        var customerExist = this.customers.map(function (c) { return c.nip; }).indexOf(newCustomer.nip);
        if (customerExist != -1) {
            var currentCutomer = this.customers[customerExist];
            var choice = confirm("klient o podanym NIP juz jest w bazie danych:\n" + currentCutomer.name +
                "\n" + currentCutomer.city + " " + currentCutomer.postCode + "\n" + currentCutomer.address + "\n"
                + currentCutomer.nip + "\n\nCzy chcesz nadpisać klienta?");
            if (choice) {
                this.UpdateCustomer(newCustomer);
            }
        }
        else {
            this.customerHttp.Add(newCustomer).subscribe(function (response) {
                _this.customers.push(response);
            }, function (error) {
                if (error.status == "401") {
                    _this.userService.LogOut();
                    return;
                }
            });
        }
    };
    CustomerServices.prototype.UpdateCustomer = function (customer) {
        var _this = this;
        var customerIndex = this.customers.map(function (c) { return c.nip; }).indexOf(customer.nip);
        if (this.customers[customerIndex] != null) {
            try {
                this.customerHttp.Update(customer).subscribe(function (response) {
                    _this.customers[customerIndex] = response;
                }, function (error) {
                    if (error.status == "401") {
                        _this.userService.LogOut();
                        return;
                    }
                    alert("Wystapił błąd podczas połączenia z serwerem");
                });
            }
            catch (err) {
                return 0;
            }
        }
    };
    //#region Non http methods
    CustomerServices.prototype.GetCustomerByIndex = function (index) {
        return this.customers[index];
    };
    CustomerServices.prototype.GetCustomerByNip = function (nip) {
        return this.customers.find(function (c) { return c.nip == nip; });
    };
    CustomerServices.prototype.GetCustomerByName = function (name) {
        return this.customers.find(function (c) { return c.name === name; });
    };
    CustomerServices.prototype.CustomerExist = function (customer) {
        if ((this.customers.map(function (c) { return c.nip; }).indexOf(customer.nip)) == -1) {
            return false;
        }
        else {
            return true;
        }
    };
    CustomerServices.prototype.CustomerEqual = function (customer) {
        if (this.CustomerExist(customer)) {
            var index = this.customers.map(function (c) { return c.nip; }).indexOf(customer.nip);
            var passedCustomer = JSON.stringify(customer);
            var originalCustomer = JSON.stringify(this.GetCustomerByIndex(index));
            if (passedCustomer != originalCustomer) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    CustomerServices.prototype.AddCustomerNonHttp = function (customer) {
        this.customers.push(customer);
    };
    CustomerServices.prototype.UpdateCustomerNonHttp = function (customer) {
        var customerIndex = this.customers.map(function (c) { return c.nip; }).indexOf(customer.nip);
        this.customers[customerIndex] = customer;
    };
    CustomerServices = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [customer_http_services_1.CustomerHttpServices, user_services_1.UserServices])
    ], CustomerServices);
    return CustomerServices;
}());
exports.CustomerServices = CustomerServices;
//# sourceMappingURL=customer.services.js.map