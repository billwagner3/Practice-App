import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterJson',
  pure: false
})
export class FilterJsonPipe implements PipeTransform {

  transform(value: string, json:JSON) {
    let newValue = JSON.stringify(value);
  }
  
}
