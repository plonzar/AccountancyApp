import { FormGroup } from '@angular/forms';

export class PriceCalculation{

  calculateUnitPriceWithoutTax(formGroup: FormGroup, changedValue: string){
    switch(changedValue){
      case "itemTotalPriceWithoutTax":{
        let priceWithoutTax = formGroup.value.itemTotalPriceWithoutTax;
        let itemAmount = formGroup.value.itemAmount;
        let newUnitPrice = (priceWithoutTax / itemAmount).toFixed(2);

        formGroup.patchValue({
          itemUnitPriceWithoutTax: newUnitPrice
        });
        break;
      }
      case "itemTotalPriceWithTax":{
        let TotalPriceWithTax = formGroup.value.itemTotalPriceWithTax;
        let itemAmount = formGroup.value.itemAmount;
        let tax = formGroup.value.itemTax;
        let newUnitPrice = ((TotalPriceWithTax / (1 + (tax / 100))) / itemAmount).toFixed(2);

        formGroup.patchValue({
          itemUnitPriceWithoutTax: newUnitPrice
        });
        break;
      }
    }
  }

  calculateTotalPriceWithoutTax(formGroup: FormGroup, changedValue: string){
    switch(changedValue){
      case "itemAmount":
      case "UnitPriceWithoutTax":{     
        let unitPrice = formGroup.value.itemUnitPriceWithoutTax; 
        let itemAmount = formGroup.value.itemAmount;       
        let newTotalPriceWithoutTax = (unitPrice * itemAmount).toFixed(2);

        formGroup.patchValue({
          itemTotalPriceWithoutTax: newTotalPriceWithoutTax
        });
        break;
      }
      case "itemTotalPriceWithTax":{       
        let TotalPriceWithTax = formGroup.value.itemTotalPriceWithTax;
        let tax = formGroup.value.itemTax;
        let newTotalPriceWithoutTax = (TotalPriceWithTax / (1 + (tax / 100))).toFixed(2);

        formGroup.patchValue({
          itemTotalPriceWithoutTax: newTotalPriceWithoutTax
        });
        break;
      }
    }
  }

  calculateTotalPriceWithTax(formGroup: FormGroup, changedValue: string){
    switch(changedValue){
      case "UnitPriceWithoutTax":
      case "itemAmount":{
        let unitPrice = formGroup.value.itemUnitPriceWithoutTax;
        let itemAmount = formGroup.value.itemAmount;
        let tax = formGroup.value.itemTax;
        let newTotalPriceWithTax = ((unitPrice * itemAmount) * (1 + (tax / 100))).toFixed(2);
        
        formGroup.patchValue({
          itemTotalPriceWithTax: newTotalPriceWithTax
        });
        break;
      }
      case "itemTax":
      case "itemTotalPriceWithoutTax":{
        let priceWithoutTax = formGroup.value.itemTotalPriceWithoutTax;
        let tax = formGroup.value.itemTax;
        let newTotalPriceWithTax = (priceWithoutTax * (1 + (tax / 100))).toFixed(2);
        
        formGroup.patchValue({
          itemTotalPriceWithTax: newTotalPriceWithTax
        });
        break;
      }
    }
  }

  calculateSum(formGroup: FormGroup){
    let itemsArray = formGroup.get('invoiceItems').value;
    let sum = 0;
    for(let item of itemsArray){
      sum += Number(item.itemTotalPriceWithTax);
    }

    return Number(sum.toFixed(2));
  }
}