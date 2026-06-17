import { Component, Input } from '@angular/core';


const CATEGORY_COLORS: Record<string, string> = {
  Grocery:  'bg-blue-50 text-blue-600',
  Beverage: 'bg-blue-50 text-blue-600',
  Dairy:    'bg-yellow-50 text-yellow-600',
  Snacks:   'bg-orange-50 text-orange-600',
};

@Component({
  selector: 'app-category-badge',
  imports: [],
  templateUrl: './category-badge.component.html',
  styleUrl: './category-badge.component.css'
})
export class CategoryBadgeComponent {

   @Input({ required: true }) category!: string;

  get colorClasses(): string {
    return CATEGORY_COLORS[this.category] ?? 'bg-gray-50 text-gray-600';
  }
}
