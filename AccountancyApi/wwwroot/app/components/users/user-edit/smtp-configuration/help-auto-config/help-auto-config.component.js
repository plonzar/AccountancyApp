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
var email_service_1 = require("./../../../../../services/email service/email.service");
var auto_config_model_1 = require("./../../../../../models/auto-config.model");
var email_service_providers_enum_1 = require("./../../../../../enums/email-service-providers.enum");
var HelpAutoConfigComponent = /** @class */ (function () {
    function HelpAutoConfigComponent(emailProviders, emailService) {
        this.emailProviders = emailProviders;
        this.emailService = emailService;
        this.config = new auto_config_model_1.AutoConfig();
        this.changingStart = false;
    }
    HelpAutoConfigComponent.prototype.ngOnInit = function () {
    };
    HelpAutoConfigComponent.prototype.Autoconfig = function () {
        var _this = this;
        this.changingStart = true;
        this.emailService.SmtpAutoConfig(this.config);
        this.smtpChangSub = this.emailService.autoConfigResult.subscribe(function (result) {
            if (result != null) {
                _this.smtpConfig = result;
                alert("Konfiguracja ukończona pomyślnie.\n\nTwoje ustawienia to:\n\nHost: "
                    + _this.smtpConfig.host
                    + "\nEmail:" + _this.smtpConfig.username
                    + "\nSSL: " + (_this.smtpConfig.sslEnabled ? "Tak" : "Nie")
                    + "\nPort: " + _this.smtpConfig.port);
            }
            _this.changingStart = false;
            _this.smtpChangSub.unsubscribe();
        });
    };
    HelpAutoConfigComponent = __decorate([
        core_1.Component({
            selector: 'app-help-auto-config',
            templateUrl: './help-auto-config.component.html',
            styleUrls: ['./help-auto-config.component.css'],
            providers: [email_service_providers_enum_1.EmailServiceProviders]
        }),
        __metadata("design:paramtypes", [email_service_providers_enum_1.EmailServiceProviders, email_service_1.EmailService])
    ], HelpAutoConfigComponent);
    return HelpAutoConfigComponent;
}());
exports.HelpAutoConfigComponent = HelpAutoConfigComponent;
//# sourceMappingURL=help-auto-config.component.js.map