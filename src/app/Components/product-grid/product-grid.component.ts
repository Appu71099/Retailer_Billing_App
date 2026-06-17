import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product-card/product-card.component';
import {ProductCardComponent} from '../product-card/product-card.component';
@Component({
  selector: 'app-product-grid',
  imports: [ProductCardComponent],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.css'
})
export class ProductGridComponent {

      @Input({ required: true }) products!: Product[];
      @Output() addToCart = new EventEmitter<Product>();
}
