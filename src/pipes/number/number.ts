import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the NumberPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'number',
})
export class NumberPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    return Number(value);
  }
}
