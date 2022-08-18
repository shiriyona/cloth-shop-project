import { Pipe, PipeTransform,  } from "@angular/core"



@Pipe({name: 'name'})
export class AmountToStringPipes implements PipeTransform{
    transfrom(amount: any) {
        if (amount.length<10) {
          return amount.subsrt(10, 0) + "there is no unit in the stock";
        }
        return null;
      }
}