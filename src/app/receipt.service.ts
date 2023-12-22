import { EventEmitter, Injectable } from '@angular/core';
import { Receipt } from './receipt';


@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor() { }

  setReceipt = new EventEmitter<Receipt[]>()
  setAmount = new EventEmitter<number>()
}
