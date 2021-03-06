import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterJson',
  pure: false
})
export class FilterJsonPipe implements PipeTransform {

  transform(value: string, json:JSON) {
    JSON.stringify(value);
    value.replace(/[{}]/g, '');
  }
}
