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
var user_services_1 = require("./../user services/user.services");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var CanActivateGuard = /** @class */ (function () {
    function CanActivateGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    CanActivateGuard.prototype.canActivate = function () {
        if (this.userService.signedIn) {
            return true;
        }
        this.router.navigate(['/user/login']);
        return false;
    };
    CanActivateGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_services_1.UserServices, router_1.Router])
    ], CanActivateGuard);
    return CanActivateGuard;
}());
exports.CanActivateGuard = CanActivateGuard;
//# sourceMappingURL=can-activate-guard.service.js.map