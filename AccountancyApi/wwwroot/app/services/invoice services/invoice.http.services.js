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
var http_1 = require("@angular/common/http");
var common_service_1 = require("../common.service");
var InvoiceHttpServices = /** @class */ (function () {
    function InvoiceHttpServices(httpClient, commonData) {
        this.httpClient = httpClient;
        this.commonData = commonData;
    }
    InvoiceHttpServices.prototype.GetByNumber = function (invoiceNumber) {
        return this.httpClient.get('api/Invoice/GetByNumber?invoiceNumber=' + invoiceNumber, { headers: new http_1.HttpHeaders().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    InvoiceHttpServices.prototype.GetAll = function () {
        return this.httpClient.get('api/Invoice/GetAll', { headers: new http_1.HttpHeaders().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    InvoiceHttpServices.prototype.Add = function (invoice) {
        return this.httpClient.post("api/Invoice/Add", invoice, { headers: new http_1.HttpHeaders().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    InvoiceHttpServices.prototype.Update = function (invoice) {
        return this.httpClient.put("api/Invoice/Update", invoice, { headers: new http_1.HttpHeaders().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    InvoiceHttpServices.prototype.Delete = function (id) {
        return this.httpClient.delete("api/Invoice/Delete?id=" + id, { headers: new http_1.HttpHeaders().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    InvoiceHttpServices.prototype.SettleInvoices = function (setteledInvoices) {
        return this.httpClient.post("api/Invoice/SettleInvoices", setteledInvoices, { headers: new http_1.HttpHeaders().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    InvoiceHttpServices = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, common_service_1.CommonService])
    ], InvoiceHttpServices);
    return InvoiceHttpServices;
}());
exports.InvoiceHttpServices = InvoiceHttpServices;
//# sourceMappingURL=invoice.http.services.js.map