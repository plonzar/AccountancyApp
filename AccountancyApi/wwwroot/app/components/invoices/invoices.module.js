"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var invoice_component_1 = require("./invoice/invoice.component");
var invoice_edit_component_1 = require("./invoice-edit/invoice-edit.component");
var invoice_details_component_1 = require("./invoice-details/invoice-details.component");
var invoices_routing_module_1 = require("./invoices-routing.module");
var InvoiceNumberSearch_pipe_1 = require("./pipes/InvoiceNumberSearch.pipe");
var global_pipes_export_module_1 = require("./../../pipes/global-pipes-export.module");
var InvoicesModule = /** @class */ (function () {
    function InvoicesModule() {
    }
    InvoicesModule = __decorate([
        core_1.NgModule({
            declarations: [
                invoice_component_1.InvoiceComponent,
                invoice_edit_component_1.InvoiceEditComponent,
                invoice_details_component_1.InvoiceDetailsComponent,
                InvoiceNumberSearch_pipe_1.InvoiceNumberSearchPipe,
            ],
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                invoices_routing_module_1.InvoicesRoutingModule,
                global_pipes_export_module_1.GlobalPipesExportModule
            ]
        })
    ], InvoicesModule);
    return InvoicesModule;
}());
exports.InvoicesModule = InvoicesModule;
//# sourceMappingURL=invoices.module.js.map