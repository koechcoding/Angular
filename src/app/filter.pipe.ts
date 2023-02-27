import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './Interfaces';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:Product[], searchString:string, property: keyof Product): Product[] {
    if(value.length ==0 || searchString==''){
      return value
    }
    let searchItems = []
    for(let product of value){
      if((product[property] as string).toLowerCase().includes(searchString.toLowerCase())
      ){
        searchItems.push(product)
      }
    }

    return searchItems

  }

}
