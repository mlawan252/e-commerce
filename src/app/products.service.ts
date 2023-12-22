import { Injectable,EventEmitter } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(){
    return [
      {
        name:'SAMSUNG TV',
        img:'assets/product1.png',
        price:150,
        amount:150,
        qty:1,
        inCart:false
      },
      {
        name:'PIXEL 4a',
        img:'assets/product2.png',
        price:200,
        amount:200,
        qty:1,
        inCart:false
      },
      {
        name:'PLAYSTATION 5',
        img:'assets/product3.png',
        price:400,
        amount:400,
        qty:1,
        inCart:false
      },
      {
        name:'DELL',
        img:'assets/product4.png',
        price:950,
        amount:950,
        qty:1,
        inCart:false
      },
      {
        name:'APPLE WATCH',
        img:'assets/product5.png',
        price:550,
        amount:550,
        qty:1,
        inCart:false
      },
      {
        name:'EAR PIECE',
        img:'assets/product6.png',
        price:700,
        amount:700,
        qty:1,
        inCart:false
      }
    ]
  
  }
  

  selectedProducts:Product[]=[]
  
  setSelectedProduct(item:Product[]){
    this.selectedProducts = item
    
  }

  getSelectedProduct(){
    return this.selectedProducts; 
  }
  qty = new EventEmitter<number>()
}
