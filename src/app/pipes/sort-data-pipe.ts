import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortData',
  pure: false,
})
export class SortDataPipe implements PipeTransform {
  transform(arr: any[], property: string): any[] {
    if (!arr) return [];
    return [...arr].sort((a, b) => a[property] - b[property]);
  }
}
