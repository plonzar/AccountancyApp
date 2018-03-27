import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: string): any {
    let regex = new RegExp('[0-9]{1,}.[0-9]{2}');
    value = Number(value).toFixed(2).toString();
    value = value.toString().replace(',','.');
    let valueArray = value.split('');
    
    if(!valueArray.includes('.')){
      valueArray.push('.00');
      value = valueArray.join('')
      return value;
    }
    for(let i = 0; i < 2; i++){
      if(!regex.test(value)){
        valueArray.push('0');
        value = valueArray.join('');
      }
    }
    return value;
  }

}