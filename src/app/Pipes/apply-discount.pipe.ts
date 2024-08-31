import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applyDiscount',
})
export class ApplyDiscountPipe implements PipeTransform {
  transform(value: number, discountNum: string): number {
    let disResult = parseInt(discountNum) / 100; // 50/100=.5
    let mulOriginalDisRes = value * disResult; //200*.5 =100

    let AfterDiscountRes = value - mulOriginalDisRes; //200 - 100 = 100
    return AfterDiscountRes;
  }
}
