import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-filter',
  imports: [],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.css'
})
export class CategoryFilterComponent {

  @Input({ required: true }) categories!: string[];
  @Input({ required: true }) activeCategory!: string;
  @Output() categoryChange = new EventEmitter<string>();

  onSelect(category: string) {
    this.categoryChange.emit(category);
  }
}
