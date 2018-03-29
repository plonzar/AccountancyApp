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
var customers_routing_module_1 = require("./customers-routing.module");
var customer_component_1 = require("./customer/customer.component");
var add_customer_component_1 = require("./add-customer/add-customer.component");
var customer_details_component_1 = require("./customer-details/customer-details.component");
var customer_edit_component_1 = require("./customer-edit/customer-edit.component");
var customer_search_pipe_1 = require("./pipes/customer-search.pipe");
var customer_invoices_component_1 = require("./customer-invoices/customer-invoices.component");
var global_pipes_export_module_1 = require("./../../pipes/global-pipes-export.module");
var customer_send_email_component_1 = require("./customer-send-email/customer-send-email.component");
var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = __decorate([
        core_1.NgModule({
            declarations: [
                customer_search_pipe_1.CustomerSearchPipe,
                customer_component_1.CustomerComponent,
                add_customer_component_1.AddCustomerComponent,
                customer_details_component_1.CustomerDetailsComponent,
                customer_edit_component_1.CustomerEditComponent,
                customer_invoices_component_1.CustomerInvoicesComponent,
                customer_send_email_component_1.CustomerSendEmailComponent,
                customer_send_email_component_1.CustomerSendEmailComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                customers_routing_module_1.CustomersRoutingModule,
                global_pipes_export_module_1.GlobalPipesExportModule
            ]
        })
    ], CustomersModule);
    return CustomersModule;
}());
exports.CustomersModule = CustomersModule;
//# sourceMappingURL=customers.module.js.map