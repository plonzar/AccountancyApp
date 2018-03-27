"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PriceCalculation = /** @class */ (function () {
    function PriceCalculation() {
    }
    PriceCalculation.prototype.calculateUnitPriceWithoutTax = function (formGroup, changedValue) {
        switch (changedValue) {
            case "itemTotalPriceWithoutTax": {
                var priceWithoutTax = formGroup.value.itemTotalPriceWithoutTax;
                var itemAmount = formGroup.value.itemAmount;
                var newUnitPrice = (priceWithoutTax / itemAmount).toFixed(2);
                formGroup.patchValue({
                    itemUnitPriceWithoutTax: newUnitPrice
                });
                break;
            }
            case "itemTotalPriceWithTax": {
                var TotalPriceWithTax = formGroup.value.itemTotalPriceWithTax;
                var itemAmount = formGroup.value.itemAmount;
                var tax = formGroup.value.itemTax;
                var newUnitPrice = ((TotalPriceWithTax / (1 + (tax / 100))) / itemAmount).toFixed(2);
                formGroup.patchValue({
                    itemUnitPriceWithoutTax: newUnitPrice
                });
                break;
            }
        }
    };
    PriceCalculation.prototype.calculateTotalPriceWithoutTax = function (formGroup, changedValue) {
        switch (changedValue) {
            case "itemAmount":
            case "UnitPriceWithoutTax": {
                var unitPrice = formGroup.value.itemUnitPriceWithoutTax;
                var itemAmount = formGroup.value.itemAmount;
                var newTotalPriceWithoutTax = (unitPrice * itemAmount).toFixed(2);
                formGroup.patchValue({
                    itemTotalPriceWithoutTax: newTotalPriceWithoutTax
                });
                break;
            }
            case "itemTotalPriceWithTax": {
                var TotalPriceWithTax = formGroup.value.itemTotalPriceWithTax;
                var tax = formGroup.value.itemTax;
                var newTotalPriceWithoutTax = (TotalPriceWithTax / (1 + (tax / 100))).toFixed(2);
                formGroup.patchValue({
                    itemTotalPriceWithoutTax: newTotalPriceWithoutTax
                });
                break;
            }
        }
    };
    PriceCalculation.prototype.calculateTotalPriceWithTax = function (formGroup, changedValue) {
        switch (changedValue) {
            case "UnitPriceWithoutTax":
            case "itemAmount": {
                var unitPrice = formGroup.value.itemUnitPriceWithoutTax;
                var itemAmount = formGroup.value.itemAmount;
                var tax = formGroup.value.itemTax;
                var newTotalPriceWithTax = ((unitPrice * itemAmount) * (1 + (tax / 100))).toFixed(2);
                formGroup.patchValue({
                    itemTotalPriceWithTax: newTotalPriceWithTax
                });
                break;
            }
            case "itemTax":
            case "itemTotalPriceWithoutTax": {
                var priceWithoutTax = formGroup.value.itemTotalPriceWithoutTax;
                var tax = formGroup.value.itemTax;
                var newTotalPriceWithTax = (priceWithoutTax * (1 + (tax / 100))).toFixed(2);
                formGroup.patchValue({
                    itemTotalPriceWithTax: newTotalPriceWithTax
                });
                break;
            }
        }
    };
    PriceCalculation.prototype.calculateSum = function (formGroup) {
        var itemsArray = formGroup.get('invoiceItems').value;
        var sum = 0;
        for (var _i = 0, itemsArray_1 = itemsArray; _i < itemsArray_1.length; _i++) {
            var item = itemsArray_1[_i];
            sum += Number(item.itemTotalPriceWithTax);
        }
        return Number(sum.toFixed(2));
    };
    return PriceCalculation;
}());
exports.PriceCalculation = PriceCalculation;
//# sourceMappingURL=price-calculation.js.map