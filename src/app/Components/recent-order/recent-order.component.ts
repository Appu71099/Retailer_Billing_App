import { Component } from '@angular/core';
import { Input } from '@angular/core';
import{OrderListItemComponent, RecentOrder} from "../order-list-item/order-list-item.component";


@Component({
  selector: 'app-recent-order',
  imports: [OrderListItemComponent],
  templateUrl: './recent-order.component.html',
  styleUrl: './recent-order.component.css'
})
export class RecentOrderComponent {
 @Input({ required: true }) orders!: RecentOrder[];


}
