import { FormArray, FormGroup } from '@angular/forms';
import { InvoiceItem } from '../../../../models/invoice-item.model';
import { Customer } from '../../../../models/customer.model';


export class GettingFormDataOperations{
  
  getCustomerData(invoiceForm: FormGroup, customer: Customer){
    customer.name = invoiceForm.value.customerName;
    customer.city = invoiceForm.value.customerCity;
    customer.postCode = invoiceForm.value.customerPostCode;
    customer.address = invoiceForm.value.customerStreet;
    customer.nip = invoiceForm.value.customerNIP;
  }

  getInvoiceItems(invoiceForm: FormGroup, invoiceItems: InvoiceItem[]){
    let formInvoicItems: FormArray = <FormArray>invoiceForm.get('invoiceItems');
    let invoiceItem: InvoiceItem;

    for(let formInvoicItem of formInvoicItems.value){
      invoiceItem = new InvoiceItem();
      invoiceItem.name = formInvoicItem.itemName;
      invoiceItem.amount = formInvoicItem.itemAmount;
      invoiceItem.tax = formInvoicItem.itemTax;
      invoiceItem.unitPriceWithoutTax = formInvoicItem.itemUnitPriceWithoutTax;
      invoiceItem.totalPriceWithoutTax = formInvoicItem.itemTotalPriceWithoutTax;
      invoiceItem.totalPriceWithTax = formInvoicItem.itemTotalPriceWithTax;

      if(invoiceItem != undefined){
        invoiceItems.push(invoiceItem);
      }
    }
  }

  getPaymentDate(invoiceForm: FormGroup){
    return invoiceForm.value.paymentDate;
  }

  getPaymentType(invoiceForm: FormGroup){
    return invoiceForm.value.paymentType;
  }
}