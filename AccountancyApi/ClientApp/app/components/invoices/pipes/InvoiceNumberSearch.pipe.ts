import { Invoice } from './../../../models/invoice.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'InvoiceNumberSearch'
})
export class InvoiceNumberSearchPipe implements PipeTransform {

  transform(invoiceArray: Invoice[], param: string) {
    if(param != '')
      return invoiceArray.filter(i => i.invoiceNumber == Number(param));
    return invoiceArray;
  }

}