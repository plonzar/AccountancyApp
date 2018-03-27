"use strict";
//#region import
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
var invoice_http_services_1 = require("./invoice.http.services");
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var router_1 = require("@angular/router");
var user_services_1 = require("./../user services/user.services");
var customer_services_1 = require("../customer services/customer.services");
var invoice_model_1 = require("../../models/invoice.model");
//#endregion
var InvoiceServices = /** @class */ (function () {
    function InvoiceServices(customerService, invoiceHttp, userService, router) {
        this.customerService = customerService;
        this.invoiceHttp = invoiceHttp;
        this.userService = userService;
        this.router = router;
        this.invoices = [];
        this.invoicesChanged = new Subject_1.Subject();
    }
    InvoiceServices.prototype.SetInvoiceshttp = function () {
        var _this = this;
        this.invoiceHttp.GetAll().subscribe(function (response) {
            if (response !== null)
                _this.invoices = response;
            _this.invoicesChanged.next(_this.invoices);
        }, function (error) {
            alert("Wystapił błąd połączenia z serwerem prosze spróbować później");
        });
    };
    InvoiceServices.prototype.GetInvoiceByNumber = function (number) {
        var index = this.invoices.map(function (i) { return i.invoiceNumber; }).indexOf(number);
        if (this.invoices[index] != null) {
            return this.invoices[index];
        }
        else {
            return null;
        }
    };
    InvoiceServices.prototype.AddInvoice = function (customer, invoiceItems, paymentDate, paymentType) {
        var _this = this;
        if (customer != null && invoiceItems != null) {
            var newInvoice_1 = new invoice_model_1.Invoice();
            //Crating new invoice
            newInvoice_1.customer = customer;
            newInvoice_1.invoiceItems = invoiceItems;
            newInvoice_1.paymentType = paymentType;
            newInvoice_1.paymentDate = paymentDate;
            newInvoice_1.invoiceDate = this.SetInvoiceDate();
            newInvoice_1.itemsPriceTotal = this.CalculateTotalPrice(invoiceItems);
            newInvoice_1.accounted = this.SetInvoicePaymentStatus(paymentType);
            this.invoiceHttp.Add(newInvoice_1).subscribe(function (response) {
                newInvoice_1 = response;
                _this.invoices.push(newInvoice_1);
                if (!_this.customerService.CustomerExist(newInvoice_1.customer)) {
                    _this.customerService.AddCustomerNonHttp(newInvoice_1.customer);
                }
                else {
                    if (!_this.customerService.CustomerEqual(newInvoice_1.customer)) {
                        _this.customerService.UpdateCustomerNonHttp(newInvoice_1.customer);
                    }
                }
            }, function (error) {
                if (error.status == "401") {
                    _this.userService.LogOut();
                    return;
                }
                alert("Wystapił błąd proszę spróbować później");
            });
        }
    };
    InvoiceServices.prototype.UpdateInvoice = function (invoiceToUpdate, customer, invoiceItems, paymentDate, paymentType, number) {
        var _this = this;
        //set customer data
        this.SetCustomerData(invoiceToUpdate['customer'], customer);
        //set invoiceItems data
        this.SetInvoicItemsData(invoiceToUpdate['invoiceItems'], invoiceItems);
        invoiceToUpdate.paymentType = paymentType;
        invoiceToUpdate.paymentDate = paymentDate;
        invoiceToUpdate.itemsPriceTotal = this.CalculateTotalPrice(invoiceItems);
        //http update
        this.invoiceHttp.Update(invoiceToUpdate).subscribe(function (response) {
            var index = _this.invoices.map(function (i) { return i.invoiceNumber; }).indexOf(number);
            _this.invoices[index] = response;
            if (!_this.customerService.CustomerExist(invoiceToUpdate['customer'])) {
                _this.customerService.AddCustomerNonHttp(invoiceToUpdate['customer']);
            }
            else {
                if (!_this.customerService.CustomerEqual(invoiceToUpdate['customer'])) {
                    _this.customerService.UpdateCustomerNonHttp(invoiceToUpdate['customer']);
                }
            }
        }, function (error) {
            if (error.status == "401") {
                _this.userService.LogOut();
                return;
            }
            alert("Wystapił błąd proszę spróbować później, dane nie zostały zmienione");
        });
    };
    InvoiceServices.prototype.DeleteInvoice = function (invoiceNumber) {
        var _this = this;
        var index = this.invoices.map(function (i) { return i.invoiceNumber; }).indexOf(invoiceNumber);
        if (this.invoices[index] != null) {
            this.invoiceHttp.Delete(this.invoices[index].id).subscribe(function (response) {
                _this.invoices.splice(index, 1);
            }, function (error) {
                if (error['status'] == "401") {
                    _this.userService.LogOut();
                    return;
                }
                if (error.error.text == "Invoice is not last") {
                    alert("Nie można usunąć faktury, nie jest ona ostatnią wystawioną fakturą.");
                }
            });
        }
        else {
            alert("Nie znaleziono faktury");
        }
    };
    InvoiceServices.prototype.SettleInvoices = function (setteledInvoices, nip) {
        var _this = this;
        this.invoiceHttp.SettleInvoices(setteledInvoices).subscribe(function () {
            for (var _i = 0, setteledInvoices_1 = setteledInvoices; _i < setteledInvoices_1.length; _i++) {
                var number = setteledInvoices_1[_i];
                var invoce = _this.GetInvoiceByNumber(number);
                invoce.accounted = true;
            }
            _this.router.navigate(["/customer"]);
        }, function (error) {
            if (error.error.text == "Invalid user") {
                _this.userService.LogOut();
            }
            if (error.error.text == "Invalid data") {
                alert("Nie zaznaczyłeś żadnej faktury do rozlicznia");
            }
            else {
                alert("Wystapił błąd proszę spróbować później, dane nie zostały zmienione");
            }
        });
    };
    //#region private methods
    InvoiceServices.prototype.SetInvoiceDate = function () {
        var timeNow = new Date();
        return timeNow;
    };
    InvoiceServices.prototype.CalculateTotalPrice = function (invoiceItems) {
        var totalPrice = invoiceItems.map(function (i) { return i.totalPriceWithTax; }).reduce(function (a, b) { return Number(a) + Number(b); });
        return totalPrice;
    };
    InvoiceServices.prototype.SetCustomerData = function (customerToUpdate, customer) {
        if (this.customerService.GetCustomerByNip(customer.nip) != null) {
            customer = this.customerService.GetCustomerByNip(customer.nip);
        }
        customerToUpdate.id = customer.id;
        customerToUpdate.address = customer.address;
        customerToUpdate.city = customer.city;
        customerToUpdate.email = customer.email;
        customerToUpdate.name = customer.name;
        customerToUpdate.nip = customer.nip;
        customerToUpdate.postCode = customer.postCode;
    };
    InvoiceServices.prototype.SetInvoicItemsData = function (itemsToUpdate, invoiceItems) {
        var index = 0;
        for (var i = 0; i < itemsToUpdate.length; i++) {
            itemsToUpdate[i].amount = invoiceItems[i].amount;
            itemsToUpdate[i].name = invoiceItems[i].name;
            itemsToUpdate[i].tax = invoiceItems[i].tax;
            itemsToUpdate[i].totalPriceWithoutTax = invoiceItems[i].totalPriceWithoutTax;
            itemsToUpdate[i].totalPriceWithTax = invoiceItems[i].totalPriceWithTax;
            itemsToUpdate[i].unitPriceWithoutTax = invoiceItems[i].unitPriceWithoutTax;
            index++;
        }
        for (var i = index; i < invoiceItems.length; i++) {
            itemsToUpdate.push(invoiceItems[i]);
        }
    };
    InvoiceServices.prototype.SetInvoicePaymentStatus = function (paymentType) {
        if (paymentType == "gotówka")
            return true;
        return false;
    };
    InvoiceServices = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [customer_services_1.CustomerServices, invoice_http_services_1.InvoiceHttpServices, user_services_1.UserServices, router_1.Router])
    ], InvoiceServices);
    return InvoiceServices;
}());
exports.InvoiceServices = InvoiceServices;
//# sourceMappingURL=invoice.services.js.map