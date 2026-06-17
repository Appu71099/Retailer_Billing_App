import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../product-card/product-card.component';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {


  @Input({ required: true }) item!: CartItem;
  @Output() quantityChange = new EventEmitter<{ productId: string; quantity: number }>();
  @Output() remove = new EventEmitter<string>();

  increase() {
    this.quantityChange.emit({ productId: this.item.product.id, quantity: this.item.quantity + 1 });
  }

  decrease() {
    if (this.item.quantity > 1) {
      this.quantityChange.emit({ productId: this.item.product.id, quantity: this.item.quantity - 1 });
    }
  }

  onRemove() {
    this.remove.emit(this.item.product.id);
  }
}
