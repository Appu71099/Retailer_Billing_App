import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Input } from '@angular/core';

export interface QuickAction {
  icon: string;        // 'bill', 'add-product', 'reports', 'orders'
  iconBg: string;      // e.g. 'bg-blue-100'
  iconColor: string;   // e.g. 'text-blue-500'
  title: string;       // 'Create New Bill'
  description: string; // 'Start a new transaction'
  route: string;       // '/billing'
}


@Component({
  selector: 'app-quick-action',
  imports: [CommonModule, RouterLink],
  templateUrl: './quick-action.component.html',
  styleUrl: './quick-action.component.css'
})
export class QuickActionComponent {
@Input({ required: true }) action!: QuickAction;
}
