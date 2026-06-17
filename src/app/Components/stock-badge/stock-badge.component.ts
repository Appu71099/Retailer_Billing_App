import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stock-badge',
  imports: [],
  templateUrl: './stock-badge.component.html',
  styleUrl: './stock-badge.component.css'
})
export class StockBadgeComponent {


  @Input({ required: true }) stock!: number;
  @Input() lowStockThreshold: number = 20;

  get isLow(): boolean {
    return this.stock <= this.lowStockThreshold;
  }
}
