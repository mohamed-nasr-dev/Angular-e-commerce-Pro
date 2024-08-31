import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard',
})
export class CreditCardPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/\d{4}/g, (match) => `${match} `);
  }
}
