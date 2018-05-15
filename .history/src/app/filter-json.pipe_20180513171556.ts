import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterJson',
  pure: false
})
export class FilterJsonPipe implements PipeTransform {

  transform(value: any, json:JSON) {
    let newValue = JSON.stringify(value).replace(/[{}]/g, '');
    // newValue.replace(/[{}]/g, '');
  }
}
