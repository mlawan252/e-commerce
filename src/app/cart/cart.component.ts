import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { ReceiptService } from '../receipt.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(
    private productService: ProductsService,
    private router: Router,
    private receiptService: ReceiptService
  ) {}

  item: Product[] = [];
  totalAmount: number = 0;

  ngOnInit() {
    this.item = this.productService.getSelectedProduct();
    this.totalAmountPurchased();
  }

  increaseQty(items: Product, btn: HTMLButtonElement) {
    items.qty++;
    if (items.qty > 1) {
      btn.disabled = false;
    }
    items.amount = items.qty * items.price;
    this.totalAmountPurchased();
  }
  decreaseQty(items: Product, btn: HTMLButtonElement) {
    items.qty--;
    if (items.qty <= 1) {
      btn.disabled = true;
    }
    items.amount = items.qty * items.price;
    this.totalAmountPurchased();
  }
  totalAmountPurchased() {
    let totalPurchased: number = 0;
    for (let i = 0; i < this.item.length; i++) {
      totalPurchased += this.item[i].amount;
    }
    this.totalAmount = totalPurchased;
  }

  reloadProducts() {
    this.router.navigate(['products']);
  }
  loadPayment() {
    this.receiptService.setReceipt.emit(this.item);
    this.receiptService.setAmount.emit(this.totalAmount);
    console.log(this.totalAmount);
  }
}
