"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var invoice_item_model_1 = require("../../../../models/invoice-item.model");
var GettingFormDataOperations = /** @class */ (function () {
    function GettingFormDataOperations() {
    }
    GettingFormDataOperations.prototype.getCustomerData = function (invoiceForm, customer) {
        customer.name = invoiceForm.value.customerName;
        customer.city = invoiceForm.value.customerCity;
        customer.postCode = invoiceForm.value.customerPostCode;
        customer.address = invoiceForm.value.customerStreet;
        customer.nip = invoiceForm.value.customerNIP;
    };
    GettingFormDataOperations.prototype.getInvoiceItems = function (invoiceForm, invoiceItems) {
        var formInvoicItems = invoiceForm.get('invoiceItems');
        var invoiceItem;
        for (var _i = 0, _a = formInvoicItems.value; _i < _a.length; _i++) {
            var formInvoicItem = _a[_i];
            invoiceItem = new invoice_item_model_1.InvoiceItem();
            invoiceItem.name = formInvoicItem.itemName;
            invoiceItem.amount = formInvoicItem.itemAmount;
            invoiceItem.tax = formInvoicItem.itemTax;
            invoiceItem.unitPriceWithoutTax = formInvoicItem.itemUnitPriceWithoutTax;
            invoiceItem.totalPriceWithoutTax = formInvoicItem.itemTotalPriceWithoutTax;
            invoiceItem.totalPriceWithTax = formInvoicItem.itemTotalPriceWithTax;
            if (invoiceItem != undefined) {
                invoiceItems.push(invoiceItem);
            }
        }
    };
    GettingFormDataOperations.prototype.getPaymentDate = function (invoiceForm) {
        return invoiceForm.value.paymentDate;
    };
    GettingFormDataOperations.prototype.getPaymentType = function (invoiceForm) {
        return invoiceForm.value.paymentType;
    };
    return GettingFormDataOperations;
}());
exports.GettingFormDataOperations = GettingFormDataOperations;
//# sourceMappingURL=getting-form-data-operations.js.map