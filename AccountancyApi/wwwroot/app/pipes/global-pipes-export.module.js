"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var currency_pipe_1 = require("./currency.pipe");
var core_1 = require("@angular/core");
var GlobalPipesExportModule = /** @class */ (function () {
    function GlobalPipesExportModule() {
    }
    GlobalPipesExportModule = __decorate([
        core_1.NgModule({
            declarations: [
                currency_pipe_1.CurrencyPipe
            ],
            imports: [],
            exports: [
                currency_pipe_1.CurrencyPipe
            ]
        })
    ], GlobalPipesExportModule);
    return GlobalPipesExportModule;
}());
exports.GlobalPipesExportModule = GlobalPipesExportModule;
//# sourceMappingURL=global-pipes-export.module.js.map