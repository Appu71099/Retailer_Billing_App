import { Component, Input } from '@angular/core';
import { CartItem } from '../product-card/product-card.component';

const GST_RATE = 0.18;

@Component({
  selector: 'app-bill-summary',
  imports: [],
  templateUrl: './bill-summary.component.html',
  styleUrl: './bill-summary.component.css'
})
export class BillSummaryComponent {

  @Input({ required: true }) cartItems!: CartItem[];
  @Input() discount: number = 0;

  get subtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  get gst(): number {
    return this.subtotal * GST_RATE;
  }

  get total(): number {
    return this.subtotal + this.gst - this.discount;
  }
}
