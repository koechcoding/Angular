import { Component, ElementRef, ViewChild,AfterViewInit} from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  
})
export class AddProductComponent {
 @ViewChild('name') name!:ElementRef
 @ViewChild('image') image!:ElementRef
 @ViewChild('description') description!:ElementRef
 @ViewChild('price') price!:ElementRef

  constructor(private productService:ProductService){

  }
 AddProduct(){
  this.productService.addProduct({
    name:this.name.nativeElement.value.toString(),
    description:this.description.nativeElement.value.toString() ,
    image:this.image.nativeElement.value.toString() ,
    price:this.price.nativeElement.value as string,
   category:'Electronics'
  })
 }
}
