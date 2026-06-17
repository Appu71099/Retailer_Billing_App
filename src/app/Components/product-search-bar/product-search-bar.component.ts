import { Component, Input, Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-product-search-bar',
  imports: [FormsModule],
  templateUrl: './product-search-bar.component.html',
  styleUrl: './product-search-bar.component.css'
})
export class ProductSearchBarComponent {

  @Input() searchTerm: string = '';
  @Output() searchTermChange = new EventEmitter<string>();

  onInput(value: string) {
    this.searchTermChange.emit(value);
  }
}
