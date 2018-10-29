import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bali'
})
export class BaliPipe implements PipeTransform {

  transform(value: string): string {
    let newString: string = "";
        for (var i = value.length -1; i >=0; i--) {
            newString += value.charAt(i);
        }
        return newString;
  }

}
