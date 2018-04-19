import { Pipe, PipeTransform } from '@angular/core';
import { CatAge } from './adoptions.interfaces';

@Pipe({name: 'catAge'})
export class CatAgePipe implements PipeTransform {
  transform(months: number): string {
    return new CatAge(months).getAge();
  }
}
