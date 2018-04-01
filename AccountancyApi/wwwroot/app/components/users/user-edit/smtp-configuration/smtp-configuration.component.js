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
var forms_1 = require("@angular/forms");
var smtp_configuration_model_1 = require("../../../../models/smtp-configuration.model");
var email_service_1 = require("./../../../../services/email service/email.service");
var SmtpConfigurationComponent = /** @class */ (function () {
    function SmtpConfigurationComponent(emailService) {
        this.emailService = emailService;
        this.smtpConfig = new smtp_configuration_model_1.SmtpConfigurationModel();
        this.configPage = false;
        this.allowedToConfiguration = false;
        this.changingStart = false;
        this.changeSucceded = false;
    }
    SmtpConfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.smtpForm.form.disable();
        }, 200);
    };
    SmtpConfigurationComponent.prototype.ActiveForm = function () {
        if (this.unlockedFormSwitch.nativeElement.checked) {
            this.smtpForm.form.enable();
        }
        else {
            this.smtpForm.form.disable();
        }
    };
    SmtpConfigurationComponent.prototype.ChangeSmtp = function () {
        var _this = this;
        this.emailService.ChangeSmtpSettings(this.smtpConfig);
        this.changingStart = true;
        this.emailService.smtpSettingsChanged.subscribe(function (result) {
            if (result) {
                _this.changingStart = false;
                _this.changeSucceded = result;
                setTimeout(function () {
                    _this.changeSucceded = false;
                }, 1500);
            }
            else
                _this.changingStart = false;
        });
    };
    SmtpConfigurationComponent.prototype.ResetSmtpSettings = function () {
        var _this = this;
        this.emailService.ResetDefaults();
        this.changingStart = true;
        this.emailService.smtpSettingsChanged.subscribe(function (result) {
            if (result) {
                _this.changingStart = false;
                _this.changeSucceded = result;
                setTimeout(function () {
                    _this.changeSucceded = false;
                }, 1500);
            }
            else
                _this.changingStart = false;
        });
    };
    SmtpConfigurationComponent.prototype.changeInfoPage = function () {
        this.configPage = !this.configPage;
    };
    __decorate([
        core_1.ViewChild('unlockForm'),
        __metadata("design:type", core_1.ElementRef)
    ], SmtpConfigurationComponent.prototype, "unlockedFormSwitch", void 0);
    __decorate([
        core_1.ViewChild('smtpForm'),
        __metadata("design:type", forms_1.NgForm)
    ], SmtpConfigurationComponent.prototype, "smtpForm", void 0);
    SmtpConfigurationComponent = __decorate([
        core_1.Component({
            selector: 'app-smtp-configuration',
            templateUrl: './smtp-configuration.component.html',
            styleUrls: ['./smtp-configuration.component.css']
        }),
        __metadata("design:paramtypes", [email_service_1.EmailService])
    ], SmtpConfigurationComponent);
    return SmtpConfigurationComponent;
}());
exports.SmtpConfigurationComponent = SmtpConfigurationComponent;
//# sourceMappingURL=smtp-configuration.component.js.map