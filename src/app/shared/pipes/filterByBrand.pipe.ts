import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByBrand',
    pure: false
})
export class filterByBrandPipe implements PipeTransform {
    transform(items: any[], filter: number | null): any {
      if (!items || !filter) {
          return items;
      }
      return items.filter(item => item.brand.brandId === filter);
    }
}
