import { Component, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  icon: string;      // emoji or icon identifier
}

export interface CartItem {
  product: Product;
  quantity: number;
}

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

   @Input({ required: true }) product!: Product;
   @Output() addToCart = new EventEmitter<Product>();


   onAddToCart() {
    this.addToCart.emit(this.product);
  }
}
