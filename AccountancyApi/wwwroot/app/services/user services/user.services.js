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
//#region import
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Subject_1 = require("rxjs/Subject");
var user_model_1 = require("./../../models/user.model");
var login_model_1 = require("../../models/login.model");
var common_service_1 = require("../common.service");
var user_http_services_1 = require("./user.http.services");
//#endregion
var UserServices = /** @class */ (function () {
    //#endregion
    function UserServices(userHttp, router, commonData) {
        this.userHttp = userHttp;
        this.router = router;
        this.commonData = commonData;
        //#region properties
        this.signedIn = false;
        this.signinStatusChanged = new Subject_1.Subject();
        this.userInactive = false;
        this.userData = new user_model_1.UserModel();
        this.loginData = new login_model_1.LoginModel();
    }
    UserServices.prototype.Login = function (loginData) {
        var _this = this;
        this.userHttp.Login(loginData).subscribe(function (response) {
            _this.loginData = loginData;
            _this.userData = response;
            _this.signedIn = true;
            _this.userHttp.GetToken(loginData).subscribe(function (response) {
                _this.commonData.token = response;
                _this.signinStatusChanged.next(_this.signedIn);
            });
            _this.router.navigate(["/invoice"]);
        }, function (error) {
            _this.signedIn = false;
            _this.signinStatusChanged.next(_this.signedIn);
            if (error['error'] == "Bad username or password") {
                alert("Złe dane logowania");
            }
        });
    };
    UserServices.prototype.LogOut = function () {
        var _this = this;
        this.userHttp.LogOut().subscribe(function () {
            _this.userData = null;
            _this.loginData = null;
            _this.signedIn = false;
            _this.userInactive = false;
            _this.commonData.token['token'] = '';
            _this.signinStatusChanged.next(_this.signedIn);
            _this.router.navigate(['/user/login']);
        });
    };
    UserServices.prototype.Register = function (regsiterData) {
        var _this = this;
        this.userHttp.Register(regsiterData).subscribe(function () {
            alert("Zarejstrowano pomyslnie");
            _this.router.navigate(['/user/login']);
        }, function (error) {
            if (error.error == "Register is locked") {
                alert("Nie posiadasz uprawnienień aby dokonać rejestracji");
                return;
            }
            if (error.error == "Invalid data") {
                alert("Wprowadzone dane są błędne");
                return;
            }
            alert("Błąd połączenia z serwerem");
            return;
        });
    };
    UserServices.prototype.GetToken = function (loginData) {
        var _this = this;
        this.userHttp.GetToken(loginData).subscribe(function (response) {
            _this.commonData.token = response;
        }, function (error) {
            if (_this.signedIn)
                _this.LogOut();
        });
    };
    UserServices.prototype.ChangePassword = function (newData) {
        var _this = this;
        this.userHttp.ChangePassword(newData).subscribe(function () {
            _this.loginData.password = newData.password;
            alert("Zaktualizowano hasło");
        }, function (error) {
            if (error.status == "401") {
                _this.LogOut();
                return;
            }
            alert("Błąd połączenia z serwerem");
        });
    };
    UserServices.prototype.ChangeUserData = function (newData) {
        var _this = this;
        this.userHttp.ChangeUserData(newData).subscribe(function () {
            _this.userData = newData;
            alert("Zaktualizowano Twoje dane");
        }, function (error) {
            if (error.status == "401") {
                _this.LogOut();
                return;
            }
            alert("Błąd połączenia z serwerem");
        });
    };
    UserServices.prototype.CheckTokenExpired = function () {
        var _this = this;
        if (this.commonData.token['token'] != '' && this.commonData.token != null) {
            this.userHttp.TokenExpired().subscribe(function (notExpired) {
                _this.GetToken(_this.loginData);
            }, function (expired) {
                if (_this.signedIn)
                    _this.LogOut();
            });
        }
    };
    UserServices.prototype.StartActiveTimer = function () {
        var _this = this;
        this.activeTimer = setTimeout(function () {
            _this.userInactive = true;
        }, 60000);
    };
    UserServices.prototype.ResetActiveTimer = function () {
        clearTimeout(this.activeTimer);
        this.userInactive = false;
        this.StartActiveTimer();
    };
    UserServices = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_http_services_1.UserHttpServices, router_1.Router, common_service_1.CommonService])
    ], UserServices);
    return UserServices;
}());
exports.UserServices = UserServices;
//# sourceMappingURL=user.services.js.map