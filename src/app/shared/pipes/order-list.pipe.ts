import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {
  transform(value: Array<any>, args: string | null = null, sort: string = 'asc'): Array<any> {
    if (!args || !Array.isArray(value)) {
      return value;
    }

    const sortedArray = [...value].sort((a, b) => {
      const valA = a[args];
      const valB = b[args];

      // Para cadenas, usa localeCompare para una comparación más precisa
      if (typeof valA === 'string' && typeof valB === 'string') {
        return sort === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }

      // Para números y otros tipos comparables
      if (valA < valB) return sort === 'asc' ? -1 : 1;
      if (valA > valB) return sort === 'asc' ? 1 : -1;
      return 0;
    });

    return sortedArray;
  }
}


