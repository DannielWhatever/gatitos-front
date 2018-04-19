import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'string2date'})
export class StringToDate implements PipeTransform {
  transform(str: string): Date {
    return new Date(str);
  }
}
