import { Component, EventEmitter, Input, Output } from '@angular/core';
import {ProductRowComponent, ProductRow} from '../product-row/product-row.component';
@Component({
  selector: 'app-product-table',
  imports: [ProductRowComponent],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})
export class ProductTableComponent {


  @Input({ required: true }) products!: ProductRow[];
  @Output() edit = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();
}
