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
var forms_1 = require("@angular/forms");
var map_1 = require("rxjs/operators/map");
var invoice_form_operations_1 = require("./helpClasses/invoice-form-operations");
var getting_form_data_operations_1 = require("./helpClasses/getting-form-data-operations");
var price_calculation_1 = require("./helpClasses/price-calculation");
var tax_value_enum_1 = require("../../../enums/tax-value.enum");
var invoice_model_1 = require("../../../models/invoice.model");
var customer_model_1 = require("../../../models/customer.model");
var invoice_services_1 = require("../../../services/invoice services/invoice.services");
var customer_services_1 = require("../../../services/customer services/customer.services");
var user_services_1 = require("../../../services/user services/user.services");
//#endregion
var InvoiceEditComponent = /** @class */ (function () {
    function InvoiceEditComponent(formOperations, priceCalculation, gettingFormData, invoiceService, customerService, activRoute, router, userService, taxValues) {
        this.formOperations = formOperations;
        this.priceCalculation = priceCalculation;
        this.gettingFormData = gettingFormData;
        this.invoiceService = invoiceService;
        this.customerService = customerService;
        this.activRoute = activRoute;
        this.router = router;
        this.userService = userService;
        this.taxValues = taxValues;
        this.sum = 0;
        this.invoice = new invoice_model_1.Invoice();
        this.customer = new customer_model_1.Customer();
        this.workMode = "Dodaj Fakutę";
        this.editMode = false;
        this.invoiceItems = [];
        this.selected = false;
        this.userService.CheckTokenExpired();
    }
    //#endregion
    InvoiceEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //getting edited invoice data if exist
        this.activRoute.params.subscribe(function (params) {
            _this.index = params['id'];
            if (_this.index !== undefined) {
                _this.invoice = _this.invoiceService.GetInvoiceByNumber(+_this.index);
                if (_this.invoice != null) {
                    _this.customer = _this.invoice['customer'];
                    _this.workMode = "Zapisz zmiany";
                    _this.editMode = true;
                }
                else {
                    alert("Nie można znaleść faktury");
                    _this.router.navigate(['/invoice']);
                }
            }
            if (_this.workMode == "Zapisz zmiany") {
                _this.title = "Edycja faktury nr " + _this.invoice['invoiceNumber'];
            }
            else {
                _this.title = "Dodawanie faktury:";
            }
            _this.InitializeForm();
        });
        //price sum change subscribing
        this.CalculateSum();
        this.invoiceForm.get('invoiceItems').valueChanges.subscribe(function () {
            _this.CalculateSum();
        });
        //filter subscribing
        this.filteredResult = this.invoiceForm.get('customerName').valueChanges.pipe(map_1.map(function (param) { return param == '' ? [] : _this.Filter(param); }));
        this.invoiceForm.get('customerName').valueChanges.subscribe(function () {
            _this.selected = false;
        });
    };
    //#region Methods which operates form
    InvoiceEditComponent.prototype.SubmitInvoice = function () {
        var paymentDate = this.gettingFormData.getPaymentDate(this.invoiceForm);
        var paymentType = this.gettingFormData.getPaymentType(this.invoiceForm);
        this.gettingFormData.getCustomerData(this.invoiceForm, this.customer);
        this.gettingFormData.getInvoiceItems(this.invoiceForm, this.invoiceItems);
        if (this.workMode == "Zapisz zmiany") {
            this.invoiceService.UpdateInvoice(this.invoice, this.customer, this.invoiceItems, paymentDate, paymentType, this.index);
            this.router.navigate(['/invoice']);
        }
        else {
            this.invoiceService.AddInvoice(this.customer, this.invoiceItems, paymentDate, paymentType);
            this.router.navigate(['/invoice']);
        }
    };
    InvoiceEditComponent.prototype.ClearForm = function () {
        this.invoiceForm.reset();
        this.formOperations.ClearInvoiceFormArray(this.invoiceForm);
    };
    InvoiceEditComponent.prototype.AddItemRow = function () {
        this.formOperations.AddItemRow(this.invoiceForm);
    };
    InvoiceEditComponent.prototype.RemoveItemRow = function (index) {
        this.formOperations.RemoveItemRow(this.invoiceForm, index);
        this.invoice.invoiceItems.splice(index, 1);
    };
    //autocomplete customer section
    InvoiceEditComponent.prototype.AutocompleteForm = function (name) {
        if (this.customerService.GetCustomerByName(name) != null) {
            this.customer = this.customerService.GetCustomerByName(name);
            this.invoiceForm.patchValue({
                'customerName': this.customer['name'],
                'customerCity': this.customer['city'],
                'customerPostCode': this.customer['postCode'],
                'customerStreet': this.customer['address'],
                'customerNIP': this.customer['nip']
            });
            this.selected = true;
        }
    };
    //#endregion
    //#region Methods refers to invoiceItem's inputs changes
    InvoiceEditComponent.prototype.ItemUnitPriceWithoutTaxChanged = function (priceFormGroup) {
        this.priceCalculation.calculateTotalPriceWithoutTax(priceFormGroup, 'UnitPriceWithoutTax');
        this.priceCalculation.calculateTotalPriceWithTax(priceFormGroup, 'UnitPriceWithoutTax');
    };
    InvoiceEditComponent.prototype.ItemAmountChanged = function (priceFormGroup) {
        this.priceCalculation.calculateTotalPriceWithoutTax(priceFormGroup, 'itemAmount');
        this.priceCalculation.calculateTotalPriceWithTax(priceFormGroup, 'itemAmount');
    };
    InvoiceEditComponent.prototype.ItemTaxChanged = function (priceFormGroup) {
        this.priceCalculation.calculateTotalPriceWithTax(priceFormGroup, 'itemTax');
    };
    InvoiceEditComponent.prototype.ItemTotalPriceWithoutTaxChanged = function (priceFormGroup) {
        this.priceCalculation.calculateUnitPriceWithoutTax(priceFormGroup, 'itemTotalPriceWithoutTax');
        this.priceCalculation.calculateTotalPriceWithTax(priceFormGroup, 'itemTotalPriceWithoutTax');
    };
    InvoiceEditComponent.prototype.ItemTotalPriceWithTaxChanged = function (priceFormGroup) {
        this.priceCalculation.calculateTotalPriceWithoutTax(priceFormGroup, 'itemTotalPriceWithTax');
        this.priceCalculation.calculateUnitPriceWithoutTax(priceFormGroup, 'itemTotalPriceWithTax');
    };
    //#endregion
    //#region Private methods
    InvoiceEditComponent.prototype.CalculateSum = function () {
        this.sum = this.priceCalculation.calculateSum(this.invoiceForm);
    };
    InvoiceEditComponent.prototype.InitializeForm = function () {
        var paymentDate;
        if (this.editMode) {
            var date = new Date(this.invoice['paymentDate']);
            paymentDate = this.SetDate(date);
        }
        else {
            var now = new Date();
            paymentDate = this.SetDate(now);
        }
        var invoiceItems = new forms_1.FormArray([]);
        this.formOperations.InitializeFormArray(invoiceItems, this.editMode, this.invoice);
        this.invoiceForm = new forms_1.FormGroup({
            'customerName': new forms_1.FormControl(this.customer.name, forms_1.Validators.required),
            'customerCity': new forms_1.FormControl(this.customer.city, forms_1.Validators.required),
            'customerPostCode': new forms_1.FormControl(this.customer.postCode, [forms_1.Validators.required, forms_1.Validators.pattern('[0-9]{2}-[0-9]{3}')]),
            'customerStreet': new forms_1.FormControl(this.customer.address, forms_1.Validators.required),
            'customerNIP': new forms_1.FormControl(this.customer.nip, [
                forms_1.Validators.required,
                forms_1.Validators.pattern('[0-9]{10}'),
                forms_1.Validators.maxLength(10),
                forms_1.Validators.minLength(10)
            ]),
            'invoiceItems': invoiceItems,
            'paymentDate': new forms_1.FormControl(paymentDate, forms_1.Validators.required),
            'paymentType': new forms_1.FormControl(this.invoice['paymentType'], forms_1.Validators.required)
        });
    };
    InvoiceEditComponent.prototype.Filter = function (param) {
        return this.customerService.customers
            .map(function (c) { return c.name; })
            .filter(function (name) { return name.toLocaleLowerCase().includes(param.toLocaleLowerCase()); });
    };
    InvoiceEditComponent.prototype.SetDate = function (date) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var dayFormat;
        var monthFormat;
        var yearFormat = String(year);
        var today;
        if (day < 10)
            dayFormat = '0' + day;
        else
            dayFormat = day.toString();
        if (month < 10)
            monthFormat = '0' + month;
        else
            monthFormat = month.toString();
        return today = yearFormat + '-' + monthFormat + '-' + dayFormat;
    };
    InvoiceEditComponent = __decorate([
        core_1.Component({
            selector: 'app-invoice-edit',
            templateUrl: './invoice-edit.component.html',
            styleUrls: ['./invoice-edit.component.css'],
            providers: [invoice_form_operations_1.InvoiceFormOperations, getting_form_data_operations_1.GettingFormDataOperations, tax_value_enum_1.TaxValue, price_calculation_1.PriceCalculation]
        }),
        __metadata("design:paramtypes", [invoice_form_operations_1.InvoiceFormOperations,
            price_calculation_1.PriceCalculation,
            getting_form_data_operations_1.GettingFormDataOperations,
            invoice_services_1.InvoiceServices,
            customer_services_1.CustomerServices,
            router_1.ActivatedRoute,
            router_1.Router,
            user_services_1.UserServices,
            tax_value_enum_1.TaxValue])
    ], InvoiceEditComponent);
    return InvoiceEditComponent;
}());
exports.InvoiceEditComponent = InvoiceEditComponent;
//# sourceMappingURL=invoice-edit.component.js.map