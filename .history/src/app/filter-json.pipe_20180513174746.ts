import { Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Pipe({
  name: 'filterJson',
  pure: false
})
export class FilterJsonPipe implements PipeTransform {

  transform(value: any, json:JSON) {
    let newValue = JSON.parse(value);
    let nextValue = newValue.replace(/[{}]/g, '');
    return nextValue;
  }
  
}
