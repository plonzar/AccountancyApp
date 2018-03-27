import { Customer } from './../../../models/customer.model';
import { Pipe, PipeTransform, ElementRef } from '@angular/core';

@Pipe({
  name: 'customerSearch'
})
export class CustomerSearchPipe implements PipeTransform {

  transform(customerArray: Customer[], param: string){
    if(param != '')
      return customerArray.filter(c => c.name.toLowerCase().includes(param.toString().toLowerCase()) || c.nip.toLowerCase().includes(param.toString().toLowerCase()))
    return customerArray;
  }

}