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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var invoice_services_1 = require("../../../services/invoice services/invoice.services");
var user_services_1 = require("../../../services/user services/user.services");
var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent(invoiceService, router, userService) {
        this.invoiceService = invoiceService;
        this.router = router;
        this.userService = userService;
        this.serchParam = '';
        this.searchFromChanged = false;
        this.searchToChanged = false;
        this.invoices = [];
        this.searchDisabled = false;
        if (this.userService.userInactive) {
            this.userService.CheckTokenExpired();
            this.userService.ResetActiveTimer();
        }
        this.invoices = this.invoiceService.invoices;
    }
    InvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.SetDate(this.searchFrom);
        this.SetDate(this.searchTo);
        this.invoiceService.invoicesChanged.subscribe(function (invoices) { return _this.invoices = invoices; });
    };
    InvoiceComponent.prototype.OnSearchFromChange = function () {
        this.searchFromChanged = true;
        this.DateRangeIsValid(this.searchToChanged);
    };
    InvoiceComponent.prototype.OnSearchToChange = function () {
        this.searchToChanged = true;
        this.DateRangeIsValid(this.searchFromChanged);
    };
    InvoiceComponent.prototype.SearchByDate = function () {
        var partSearchFrom = this.searchFrom.nativeElement.value.split('-');
        var partSearchTo = this.searchTo.nativeElement.value.split('-');
        var searchFrom = new Date(partSearchFrom[0], partSearchFrom[1] - 1, partSearchFrom[2]);
        var searchTo = new Date(partSearchTo[0], partSearchTo[1] - 1, partSearchTo[2], 23);
        var newArray = [];
        for (var _i = 0, _a = this.invoiceService.invoices; _i < _a.length; _i++) {
            var invoice = _a[_i];
            var invoiceDate = new Date(invoice.invoiceDate);
            if (invoiceDate >= searchFrom && invoiceDate <= searchTo) {
                newArray.push(invoice);
            }
        }
        this.invoices = newArray;
    };
    InvoiceComponent.prototype.ResetSerach = function () {
        this.invoices = this.invoiceService.invoices;
        this.SetDate(this.searchFrom);
        this.SetDate(this.searchTo);
    };
    InvoiceComponent.prototype.DateRangeIsValid = function (change) {
        if (change) {
            var dateFromArray = this.searchFrom.nativeElement.value.split('-');
            var dateFrom = new Date(dateFromArray[0], dateFromArray[1] - 1, dateFromArray[2] - 1);
            var dateToArray = this.searchTo.nativeElement.value.split('-');
            var dateTo = new Date(dateToArray[0], dateToArray[1] - 1, dateToArray[2] - 1);
            if (dateFrom > dateTo) {
                alert("Data początkowa jest większa niż data końcowa");
                this.searchDisabled = true;
                //this.SetDate(this.searchFrom);
            }
            else {
                this.searchDisabled = false;
            }
        }
    };
    InvoiceComponent.prototype.SetDate = function (dateInput) {
        var timeNow = new Date();
        var day = timeNow.getDate();
        var month = timeNow.getMonth() + 1;
        var year = timeNow.getFullYear();
        var dayFormat;
        var monthFormat;
        var yearFormat = String(year);
        var today;
        if (day < 10)
            dayFormat = '0' + day;
        else
            dayFormat = day.toString();
        if (month < 10)
            monthFormat = '0' + month;
        else
            monthFormat = month.toString();
        today = yearFormat + '-' + monthFormat + '-' + dayFormat;
        dateInput.nativeElement.value = today;
    };
    __decorate([
        core_1.ViewChild('SearchFrom'),
        __metadata("design:type", core_1.ElementRef)
    ], InvoiceComponent.prototype, "searchFrom", void 0);
    __decorate([
        core_1.ViewChild('SearchTo'),
        __metadata("design:type", core_1.ElementRef)
    ], InvoiceComponent.prototype, "searchTo", void 0);
    InvoiceComponent = __decorate([
        core_1.Component({
            selector: 'app-invoice',
            templateUrl: './invoice.component.html',
            styleUrls: ['./invoice.component.css']
        }),
        __metadata("design:paramtypes", [invoice_services_1.InvoiceServices, router_1.Router, user_services_1.UserServices])
    ], InvoiceComponent);
    return InvoiceComponent;
}());
exports.InvoiceComponent = InvoiceComponent;
//# sourceMappingURL=invoice.component.js.map