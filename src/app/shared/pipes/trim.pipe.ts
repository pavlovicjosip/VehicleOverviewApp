import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimName',
})
export class TrimPipe implements PipeTransform {
  transform(value: string, delimiter: string = '##'): string {
    if (!value) return value;

    return value.split(delimiter)[0].trim();
  }
}
