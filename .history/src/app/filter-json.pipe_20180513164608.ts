import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterJson',
  pure: false
})
export class FilterJsonPipe implements PipeTransform {

  transform(value: any, filterString: string, json) {
    return JSON ? JSON.stringify(json, null, '  '): this
  }
}
