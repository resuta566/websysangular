import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  // this the name of the pipe in the html
  name: 'gago'
})
export class GagoPipe implements PipeTransform {
  // getting the string value or any type of value
  transform(value: any): any {
    if (!value) {
      return null;
    }
    // Splitting the string one by one then reversing it 
    // then joining to be a string then return it to the view :D
    return value.split('').reverse('').join('');
  }
}