import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterJson',
  pure: false
})
export class FilterJsonPipe implements PipeTransform {

  transform(json:JSON) {
    JSON.stringify(json);
    
    // newItem.replace(/[{}]/g, '');
    return json;
  }
}
