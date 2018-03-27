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
var UserHttpServices = /** @class */ (function () {
    function UserHttpServices(userHttp, userService, commonData) {
        this.userHttp = userHttp;
        this.userService = userService;
        this.commonData = commonData;
    }
    UserHttpServices.prototype.Login = function (loginData) {
        return this.userHttp.post("api/account/Login", loginData);
    };
    UserHttpServices.prototype.LogOut = function () {
        return this.userHttp.post("api/account/Logout", null, { headers: new http_1.HttpHeaders().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    UserHttpServices.prototype.Register = function (registerData) {
        return this.userHttp.post("api/account/Register", registerData);
    };
    UserHttpServices.prototype.ChangePassword = function (passwordData) {
        return this.userHttp.post("api/account/ChangePassword", passwordData, { headers: new http_1.HttpHeaders().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    UserHttpServices.prototype.ChangeUserData = function (userData) {
        return this.userHttp.post("api/account/UpdateUser", userData, { headers: new http_1.HttpHeaders().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    UserHttpServices.prototype.GetToken = function (loginData) {
        return this.userHttp.post("/api/account/CreateToken", loginData);
    };
    UserHttpServices.prototype.TokenExpired = function () {
        return this.userHttp.post("/api/account/CheckIfExpired", null, { headers: new http_1.HttpHeaders().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    UserHttpServices.prototype.IsAvailabel = function (paramsArray) {
        return this.userHttp.post('/api/account/IsAvailable', paramsArray);
    };
    UserHttpServices = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, http_1.HttpClient, common_service_1.CommonService])
    ], UserHttpServices);
    return UserHttpServices;
}());
exports.UserHttpServices = UserHttpServices;
//# sourceMappingURL=user.http.services.js.map