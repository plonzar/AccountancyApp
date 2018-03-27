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
var router_1 = require("@angular/router");
var invoice_services_1 = require("../../../services/invoice services/invoice.services");
var user_services_1 = require("./../../../services/user services/user.services");
var user_model_1 = require("./../../../models/user.model");
var jsPDF = require("jspdf");
var InvoiceDetailsComponent = /** @class */ (function () {
    function InvoiceDetailsComponent(activRoute, router, invoiceService, userService) {
        this.activRoute = activRoute;
        this.router = router;
        this.invoiceService = invoiceService;
        this.userService = userService;
        this.user = new user_model_1.UserModel();
        this.userService.CheckTokenExpired();
        this.user = this.userService.userData;
    }
    InvoiceDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activRoute.queryParams.subscribe(function (params) {
            _this.invoiceNumber = +params['number'];
            _this.invoice = _this.invoiceService.GetInvoiceByNumber(_this.invoiceNumber);
            if (_this.invoice == null) {
                alert("Nie można znaleść faktury, prosze spróbować ponownie");
                _this.router.navigate(['/invoice']);
            }
        });
    };
    InvoiceDetailsComponent.prototype.DeleteInvoice = function () {
        this.invoiceService.DeleteInvoice(this.invoiceNumber);
        this.router.navigate(['/']);
    };
    InvoiceDetailsComponent.prototype.GeneratePDF = function () {
        var _this = this;
        var signatureElement = document.createElement('div');
        signatureElement.classList.add('col-sm-6');
        signatureElement.innerHTML = '<div class="col-sm-4 signature-element pull-right" ><h4>Wystawił</h4><br><br><p>...................</p></div>';
        this.invoiceContent.nativeElement.appendChild(signatureElement);
        var doc = new jsPDF('p', 'mm', 'a4');
        doc.addHTML(this.invoiceContent.nativeElement, function () {
            doc.save('Faktura_nr_' + _this.invoice.invoiceNumber + '.pdf');
        });
        setTimeout(function () {
            _this.invoiceContent.nativeElement.removeChild(signatureElement);
        }, 10);
    };
    __decorate([
        core_1.ViewChild('invoiceContent'),
        __metadata("design:type", core_1.ElementRef)
    ], InvoiceDetailsComponent.prototype, "invoiceContent", void 0);
    InvoiceDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-invoice-details',
            templateUrl: './invoice-details.component.html',
            styleUrls: ['./invoice-details.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, invoice_services_1.InvoiceServices, user_services_1.UserServices])
    ], InvoiceDetailsComponent);
    return InvoiceDetailsComponent;
}());
exports.InvoiceDetailsComponent = InvoiceDetailsComponent;
//# sourceMappingURL=invoice-details.component.js.map