import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterJson',
  pure: false
})
export class FilterJsonPipe implements PipeTransform {

  transform(value: string) {
    
    let thisValue = JSON.stringify(value);
    let newValue = thisValue.replace(/[{},""]/g, '');
         
      return thisValue;
     
  }
}
