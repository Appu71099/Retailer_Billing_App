import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';

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
  selector: 'app-stat-card',
  imports: [CommonModule],
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.css'
})
export class StatCardComponent {

  @Input({ required: true }) data!: StatCardData;
}
