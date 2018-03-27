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
var common_service_1 = require("./../common.service");
var CustomerHttpServices = /** @class */ (function () {
    function CustomerHttpServices(httpClient, commonData) {
        this.httpClient = httpClient;
        this.commonData = commonData;
    }
    CustomerHttpServices.prototype.GetByNip = function (nip) {
        return this.httpClient.get('api/Customer/GetByNip?nip=' + nip, { headers: new http_1.HttpHeaders().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    CustomerHttpServices.prototype.GetAll = function () {
        return this.httpClient.get('api/Customer/GetAll', { headers: new http_1.HttpHeaders().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    CustomerHttpServices.prototype.Add = function (customer) {
        return this.httpClient.post("api/Customer/Add", customer, { headers: new http_1.HttpHeaders().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    CustomerHttpServices.prototype.Update = function (customer) {
        return this.httpClient.put("api/Customer/Update", customer, { headers: new http_1.HttpHeaders().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    CustomerHttpServices.prototype.Exist = function (customer) {
        return this.httpClient.post("api/Customer/Exist", customer, { headers: new http_1.HttpHeaders().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    CustomerHttpServices = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, common_service_1.CommonService])
    ], CustomerHttpServices);
    return CustomerHttpServices;
}());
exports.CustomerHttpServices = CustomerHttpServices;
//# sourceMappingURL=customer.http.services.js.map