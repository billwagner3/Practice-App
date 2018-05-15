import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterJson',
  pure: false
})
export class FilterJsonPipe implements PipeTransform {

  transform(value: any) {
    
    let thisValue = [Symbol(), undefined, function(){}, 'ok']
    JSON.stringify(value);
    // let newValue = thisValue.replace(/[{},""]/g, '');
         
      console.log(thisValue);
     
  }
}
