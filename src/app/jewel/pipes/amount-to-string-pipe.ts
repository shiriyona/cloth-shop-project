import { Pipe, PipeTransform,  } from "@angular/core"


@Pipe({name: 'stockStatus'})
export class AmountToStringPipes implements PipeTransform{
  transform(value: any, amount: any[]): any{
    if (value?.length > 10) {
         return 'hhhj';
      }
      else if (value?.length <= 10 && value?.length >= 1){
      return 'last in stock'
      }
      else if (value?.length == 0 ) {
        return 'no in stock'
      }
  }
}