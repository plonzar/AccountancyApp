"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var InvoiceFormOperations = /** @class */ (function () {
    function InvoiceFormOperations() {
    }
    InvoiceFormOperations.prototype.ClearInvoiceFormArray = function (invoiceForm) {
        var arrayLength = invoiceForm.get('invoiceItems').length;
        for (var i = arrayLength; i > 0; i--) {
            invoiceForm.get('invoiceItems').removeAt(i);
        }
    };
    InvoiceFormOperations.prototype.AddItemRow = function (invoiceForm) {
        var newRow = new forms_1.FormGroup({
            'itemName': new forms_1.FormControl(null, forms_1.Validators.required),
            'itemAmount': new forms_1.FormControl(1, [forms_1.Validators.required, forms_1.Validators.min(1)]),
            'itemTax': new forms_1.FormControl(23, forms_1.Validators.required),
            'itemUnitPriceWithoutTax': new forms_1.FormControl(0, forms_1.Validators.required),
            'itemTotalPriceWithoutTax': new forms_1.FormControl(0, forms_1.Validators.required),
            'itemTotalPriceWithTax': new forms_1.FormControl(0, forms_1.Validators.required),
        });
        invoiceForm.get('invoiceItems').push(newRow);
    };
    InvoiceFormOperations.prototype.RemoveItemRow = function (invoiceForm, index) {
        invoiceForm.get('invoiceItems').removeAt(index);
    };
    InvoiceFormOperations.prototype.InitializeFormArray = function (invoiceItems, editMode, invoice) {
        if (editMode) {
            for (var _i = 0, _a = invoice['invoiceItems']; _i < _a.length; _i++) {
                var item = _a[_i];
                var inoviceItem = new forms_1.FormGroup({
                    'itemName': new forms_1.FormControl(item['name'], forms_1.Validators.required),
                    'itemAmount': new forms_1.FormControl(item['amount'], [forms_1.Validators.required, forms_1.Validators.min(1)]),
                    'itemTax': new forms_1.FormControl(item['tax'], forms_1.Validators.required),
                    'itemUnitPriceWithoutTax': new forms_1.FormControl(item['unitPriceWithoutTax'], forms_1.Validators.required),
                    'itemTotalPriceWithoutTax': new forms_1.FormControl(item['totalPriceWithoutTax'], forms_1.Validators.required),
                    'itemTotalPriceWithTax': new forms_1.FormControl(item['totalPriceWithTax'], forms_1.Validators.required),
                });
                invoiceItems.push(inoviceItem);
            }
        }
        else {
            var inoviceItem = new forms_1.FormGroup({
                'itemName': new forms_1.FormControl(null, forms_1.Validators.required),
                'itemAmount': new forms_1.FormControl(1, [forms_1.Validators.required, forms_1.Validators.min(1)]),
                'itemTax': new forms_1.FormControl(23, forms_1.Validators.required),
                'itemUnitPriceWithoutTax': new forms_1.FormControl(0, forms_1.Validators.required),
                'itemTotalPriceWithoutTax': new forms_1.FormControl(0, forms_1.Validators.required),
                'itemTotalPriceWithTax': new forms_1.FormControl(0, forms_1.Validators.required),
            });
            invoiceItems.push(inoviceItem);
        }
    };
    return InvoiceFormOperations;
}());
exports.InvoiceFormOperations = InvoiceFormOperations;
//# sourceMappingURL=invoice-form-operations.js.map