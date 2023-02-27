import { Component, OnInit } from '@angular/core';
import { Product } from '../Interfaces';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  // providers:[ProductService] if service is needed for only this component.
})
export class ProductsComponent implements OnInit {
  products!:Product[]
  constructor(private productService:ProductService){
    
  }
  ngOnInit(): void {
    this.products= this.productService.getProducts()
  }
  date= new Date(10,15,2023)
  PI =3.147837653478
  category=''
   
}
