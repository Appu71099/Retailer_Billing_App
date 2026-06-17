import { Component, EventEmitter, Input, Output } from '@angular/core';

import { StockBadgeComponent } from '../stock-badge/stock-badge.component';
import { CategoryBadgeComponent } from '../category-badge/category-badge.component';
export interface ProductRow {
  id: string;
  image: string;     // emoji for now
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
}


@Component({
  selector: 'app-product-row',
  imports: [CategoryBadgeComponent, StockBadgeComponent],
  templateUrl: './product-row.component.html',
  styleUrl: './product-row.component.css'
})
export class ProductRowComponent {

  @Input({ required: true }) product!: ProductRow;
  @Output() edit = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();
}
