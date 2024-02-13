import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {
  transform(value: any[], args: string = 'ciudad', sort: string = 'asc'): any[] {
    if (!value || !Array.isArray(value) || value.length <= 1) {
      return value;
    }

    return value.sort((a, b) => {
      const valA = a[args].toLowerCase();
      const valB = b[args].toLowerCase();

      if (sort === 'asc') {
        return valA.localeCompare(valB);
      } else {
        return valB.localeCompare(valA);
      }
    });
  }
}


