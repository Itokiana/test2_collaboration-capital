import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchByName',
    pure: false
})
export class searchByNamePipe implements PipeTransform {
    transform(items: any[], filter: string): any {
      if (!items || !filter) {
          return items;
      }
      return items.filter(item => item.campaignName.includes(filter));
    }
}
