import { Component } from '@angular/core';
import { ReceiptService } from '../receipt.service';
import { Receipt } from '../receipt';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  receipts:Receipt[]=[]
  amt:number = 0
  constructor(private receiptService:ReceiptService){
    this.receiptService.setAmount.subscribe(
      (q:number)=>this.amt=q
    )
  }
  
}
