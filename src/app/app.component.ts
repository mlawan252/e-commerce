import { Component } from '@angular/core';
import { ProductsService } from './products.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';
  qty:number=0
  constructor(private productService:ProductsService){
    this.productService.qty.subscribe(
      (q:number)=>this.qty=q
    )
  }
  
}
    

