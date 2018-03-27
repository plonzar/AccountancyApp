import { InvoiceItem } from './../../../../models/invoice-item.model';
import { FormGroup, FormControl,FormArray, Validators } from "@angular/forms";
import { Invoice } from "../../../../models/invoice.model";

export class InvoiceFormOperations{

  ClearInvoiceFormArray(invoiceForm: FormGroup){
    let arrayLength = (<FormArray>invoiceForm.get('invoiceItems')).length
    for(let i = arrayLength; i > 0; i--){
      (<FormArray>invoiceForm.get('invoiceItems')).removeAt(i);
    }
  }

  AddItemRow(invoiceForm: FormGroup){
    let newRow = new FormGroup({
      'itemName': new FormControl(null, Validators.required),
      'itemAmount': new FormControl(1, [Validators.required,Validators.min(1)]),
      'itemTax': new FormControl(23, Validators.required),
      'itemUnitPriceWithoutTax': new FormControl(0, Validators.required),
      'itemTotalPriceWithoutTax': new FormControl(0, Validators.required),
      'itemTotalPriceWithTax': new FormControl(0, Validators.required),
    });
    (<FormArray>invoiceForm.get('invoiceItems')).push(newRow);
  }

  RemoveItemRow(invoiceForm: FormGroup, index: number){
    (<FormArray>invoiceForm.get('invoiceItems')).removeAt(index);
  }

  InitializeFormArray(invoiceItems: FormArray, editMode: boolean, invoice: Invoice){
         
    if(editMode){
      for(let item of invoice['invoiceItems']){
        let inoviceItem = new FormGroup({
          'itemName': new FormControl(item['name'], Validators.required),
          'itemAmount': new FormControl(item['amount'], [Validators.required,Validators.min(1)]),
          'itemTax': new FormControl(item['tax'], Validators.required),
          'itemUnitPriceWithoutTax': new FormControl(item['unitPriceWithoutTax'], Validators.required),
          'itemTotalPriceWithoutTax': new FormControl(item['totalPriceWithoutTax'], Validators.required),
          'itemTotalPriceWithTax': new FormControl(item['totalPriceWithTax'], Validators.required),
        });
        invoiceItems.push(inoviceItem);
      }
    }
    else{    
      let inoviceItem = new FormGroup({
        'itemName': new FormControl(null, Validators.required),
        'itemAmount': new FormControl(1, [Validators.required,Validators.min(1)]),
        'itemTax': new FormControl(23, Validators.required),
        'itemUnitPriceWithoutTax': new FormControl(0, Validators.required),
        'itemTotalPriceWithoutTax': new FormControl(0, Validators.required),
        'itemTotalPriceWithTax': new FormControl(0, Validators.required),
        });


      invoiceItems.push(inoviceItem);
    }
  }
}