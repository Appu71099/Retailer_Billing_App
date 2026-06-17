import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../product-card/product-card.component';
import { BillSummaryComponent } from '../bill-summary/bill-summary.component';
import { CartItemComponent } from '../cart-item/cart-item.component';
@Component({
  selector: 'app-current-bill',
  imports: [BillSummaryComponent,CartItemComponent],
  templateUrl: './current-bill.component.html',
  styleUrl: './current-bill.component.css'
})
export class CurrentBillComponent {

  @Input({ required: true }) cartItems!: CartItem[];

  @Output() quantityChange = new EventEmitter<{ productId: string; quantity: number }>();
  @Output() removeItem = new EventEmitter<string>();
  @Output() hold = new EventEmitter<void>();
  @Output() clear = new EventEmitter<void>();
}
