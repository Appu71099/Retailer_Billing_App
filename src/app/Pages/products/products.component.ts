import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import {ProductTableComponent} from "../../Components/product-table/product-table.component";
import { ProductRow } from '../../Components/product-row/product-row.component';

const PRODUCT_ROWS: ProductRow[] = [
  { id: 'p1', image: '🌾', name: 'Rice 1kg',        sku: 'GRC-001', category: 'Grocery',  price: 65,  stock: 150 },
  { id: 'p2', image: '🛢️', name: 'Cooking Oil 1L',  sku: 'GRC-002', category: 'Grocery',  price: 180, stock: 80 },
  { id: 'p3', image: '🍬', name: 'Sugar 1kg',       sku: 'GRC-003', category: 'Grocery',  price: 45,  stock: 200 },
  { id: 'p4', image: '🌾', name: 'Wheat Flour 1kg', sku: 'GRC-004', category: 'Grocery',  price: 50,  stock: 120 },
  { id: 'p5', image: '☕', name: 'Tea Powder 250g', sku: 'BEV-001', category: 'Beverage', price: 140, stock: 90 },
];

const CATEGORY_COLORS: Record<string, string> = {
  Grocery:  'bg-blue-50 text-blue-600',
  Beverage: 'bg-blue-50 text-blue-600',
  Dairy:    'bg-yellow-50 text-yellow-600',
  Snacks:   'bg-orange-50 text-orange-600',
};

const LOW_STOCK_THRESHOLD = 20;

@Component({
  selector: 'app-products',
  imports: [ProductTableComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  allProducts = signal<ProductRow[]>(PRODUCT_ROWS);
  searchTerm = signal('');

  @Input({ required: true }) products: ProductRow[] = this.allProducts();
  @Output() edit = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) return this.allProducts();

    return this.allProducts().filter(p =>
      p.name.toLowerCase().includes(term) || p.sku.toLowerCase().includes(term)
    );
  });

  getCategoryClasses(category: string): string {
    return CATEGORY_COLORS[category] ?? 'bg-gray-50 text-gray-600';
  }

  isLowStock(stock: number): boolean {
    return stock <= LOW_STOCK_THRESHOLD;
  }

   onAddProduct() {
    // open a modal/dialog or navigate to an "Add Product" form
    console.log('Add product clicked');
  }

  onEditProduct(id: string) {
    // open edit modal pre-filled with product data
    console.log('Edit product', id);
  }

  onDeleteProduct(id: string) {
    this.allProducts.update(products => products.filter(p => p.id !== id));
  }
}
