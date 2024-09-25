import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pretty'
})
export class PrettyPipe implements PipeTransform {

  transform(value: any,):string {
    return JSON.stringify(value, null, 4)
    .replace(' ', '   ')
    .replace(':{', '    ')
    // .replace(/ {/g,'\n' );
  }

}
