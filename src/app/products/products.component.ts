import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:Product[]=[]
  productsAdded:Product[]=[]
   
  constructor(private productService:ProductsService){}

  ngOnInit(){
    this.products = this.productService.getProducts()
  }

  sendProduct(event:Product){
    if(event.inCart==false){
      this.productsAdded.push(event)
      this.emitProducts()
      event.inCart=true    
    }
    else{
      this.productsAdded=this.productsAdded.filter((product)=>product != event)
      this.emitProducts()
      event.inCart=false   
    }
}
emitProducts(){
  this.productService.setSelectedProduct(this.productsAdded) 
  this.productService.qty.emit(this.productsAdded.length)
}
}
