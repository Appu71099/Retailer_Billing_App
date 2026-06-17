import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from "../../Components/stat-card/stat-card.component";
import { RecentOrder } from '../../Components/order-list-item/order-list-item.component';
import { RecentOrderComponent } from '../../Components/recent-order/recent-order.component';
import { QuickAction } from '../../Components/quick-action/quick-action.component';
import { RouterLink } from '@angular/router';
import{ QuickActionComponent } from '../../Components/quick-action/quick-action.component';


export interface StatCardData {
  icon: string;            // icon identifier e.g. 'dollar', 'bag', 'users', 'box'
  iconBg: string;          // tailwind classes for icon background, e.g. 'bg-blue-100'
  iconColor: string;       // tailwind classes for icon color, e.g. 'text-blue-500'
  value: string;           // '₹45,280'
  label: string;           // 'Today\'s Revenue'
  change: string;          // '+12.5%'
  changeType: 'positive' | 'negative';
}

@Component({
  selector: 'app-dashboard-pages',
  imports: [CommonModule, StatCardComponent, QuickActionComponent,RecentOrderComponent, RouterLink],
  templateUrl: './dashboard-pages.component.html',
  styleUrl: './dashboard-pages.component.css'
})
export class DashboardPagesComponent {

  userName: string = 'Admin';

  statCards: StatCardData[] = [
    {
    icon: 'dollar',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-500',
    value: '₹45,280',
    label: "Today's Revenue",
    change: '+12.5%',
    changeType: 'positive'
  },
  {
    icon: 'bag',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-500',
    value: '142',
    label: 'Orders Today',
    change: '+8.2%',
    changeType: 'positive'
  },
  {
    icon: 'users',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-500',
    value: '1,258',
    label: 'Total Customers',
    change: '+15.3%',
    changeType: 'positive'
  },
  {
    icon: 'box',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-500',
    value: '486',
    label: 'Products in Stock',
    change: '-3.1%',
    changeType: 'negative'
  }
  ];


 recentOrders: RecentOrder[] = [
  {
    invoiceId: '#INV-2451',
    time: '2 min ago',
    amount: '₹1,240',
    status: 'Completed'
  },
  {
    invoiceId: '#INV-2450',
    time: '15 min ago',
    amount: '₹890',
    status: 'Completed'
  },
  {
    invoiceId: '#INV-2449',
    time: '32 min ago',
    amount: '₹2,150',
    status: 'Pending'
  }
];

 quickActions: QuickAction[] = [
  {
    icon: 'bill',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-500',
    title: 'Create New Bill',
    description: 'Start a new transaction',
    route: '/billing'
  },
  {
    icon: 'add-product',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-500',
    title: 'Add Product',
    description: 'Add new inventory item',
    route: '/products'
  },
  {
    icon: 'reports',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-500',
    title: 'View Reports',
    description: 'Check sales analytics',
    route: '/reports'
  },
  {
    icon: 'orders',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-500',
    title: 'View Orders',
    description: 'Manage all orders',
    route: '/billing'
  }
];

}
