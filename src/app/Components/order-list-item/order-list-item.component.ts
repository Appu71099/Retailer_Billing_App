import { Component } from '@angular/core';
import { Input } from '@angular/core';

export interface RecentOrder {
  invoiceId: string;   // '#INV-2451'
  time: string;        // '2 min ago'
  amount: string;       // '₹1,240'
  status: 'Completed' | 'Pending' | 'Cancelled';
}

@Component({
  selector: 'app-order-list-item',
  imports: [],
  templateUrl: './order-list-item.component.html',
  styleUrl: './order-list-item.component.css'
})
export class OrderListItemComponent {

   @Input({ required: true }) order!: RecentOrder;
}
