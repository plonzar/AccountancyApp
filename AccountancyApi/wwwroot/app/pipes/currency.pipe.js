"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CurrencyPipe = /** @class */ (function () {
    function CurrencyPipe() {
    }
    CurrencyPipe.prototype.transform = function (value) {
        var regex = new RegExp('[0-9]{1,}.[0-9]{2}');
        value = Number(value).toFixed(2).toString();
        value = value.toString().replace(',', '.');
        var valueArray = value.split('');
        if (!valueArray.includes('.')) {
            valueArray.push('.00');
            value = valueArray.join('');
            return value;
        }
        for (var i = 0; i < 2; i++) {
            if (!regex.test(value)) {
                valueArray.push('0');
                value = valueArray.join('');
            }
        }
        return value;
    };
    CurrencyPipe = __decorate([
        core_1.Pipe({
            name: 'currencyPipe'
        })
    ], CurrencyPipe);
    return CurrencyPipe;
}());
exports.CurrencyPipe = CurrencyPipe;
//# sourceMappingURL=currency.pipe.js.map