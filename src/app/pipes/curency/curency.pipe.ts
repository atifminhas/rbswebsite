import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurencyPipe implements PipeTransform {

  public currentCurrency;
  currencyCode = '';
  transform(price: any, currencyCode: string = '') {
    price = parseFloat(price);
    const setValue = currencyCode + " " + price.toFixed(3);
    return setValue;
  }
}
