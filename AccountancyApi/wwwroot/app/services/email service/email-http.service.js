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
var common_service_1 = require("./../common.service");
var http_1 = require("@angular/common/http");
var EmailHttpService = /** @class */ (function () {
    function EmailHttpService(commonData, httpService) {
        this.commonData = commonData;
        this.httpService = httpService;
    }
    EmailHttpService.prototype.SendEmail = function (mesageConfig) {
        return this.httpService.post("api/email/SendMail", mesageConfig, { headers: new http_1.HttpHeaders().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    EmailHttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [common_service_1.CommonService, http_1.HttpClient])
    ], EmailHttpService);
    return EmailHttpService;
}());
exports.EmailHttpService = EmailHttpService;
//# sourceMappingURL=email-http.service.js.map