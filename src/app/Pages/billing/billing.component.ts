import { Component, signal, computed } from '@angular/core';
import {ProductGridComponent} from '../../Components/product-grid/product-grid.component';
import { CartItem, Product } from '../../Components/product-card/product-card.component';
import { ProductSearchBarComponent } from '../../Components/product-search-bar/product-search-bar.component';
import { CategoryFilterComponent } from '../../Components/category-filter/category-filter.component';
import { CurrentBillComponent } from '../../Components/current-bill/current-bill.component';

@Component({
  selector: 'app-billing',
  imports: [ProductGridComponent,CurrentBillComponent,ProductSearchBarComponent,CategoryFilterComponent],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css'
})
export class BillingComponent {

 categories : string[] = ['All', 'Grocery', 'Beverage', 'Dairy', 'Snacks'];

  allProducts : Product []= [
  { id: 'p1', name: 'Rice 1kg',        category: 'Grocery', price: 65,  stock: 150, icon: '🌾' },
  { id: 'p2', name: 'Cooking Oil 1L',  category: 'Grocery', price: 180, stock: 80,  icon: '🛢️' },
  { id: 'p3', name: 'Sugar 1kg',       category: 'Grocery', price: 45,  stock: 200, icon: '🍬' },
  { id: 'p4', name: 'Wheat Flour 1kg', category: 'Grocery', price: 50,  stock: 120, icon: '🌾' },
  { id: 'p5', name: 'Tea Powder 250g', category: 'Beverage', price: 140, stock: 90,  icon: '☕' },
  { id: 'p6', name: 'Coffee 100g',     category: 'Beverage', price: 220, stock: 60,  icon: '☕' },
];

  searchTerm = signal('');
  activeCategory = signal('All');
  cartItems = signal<CartItem[]>([]);


  filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const category = this.activeCategory();

    return this.allProducts.filter(p => {
      const matchesCategory = category === 'All' || p.category === category;
      const matchesSearch = p.name.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  });

   onAddToCart(product: Product) {
    this.cartItems.update(items => {
      const existing = items.find(i => i.product.id === product.id);
      if (existing) {
        return items.map(i =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...items, { product, quantity: 1 }];
    });
  }




  onCategoryChange(category: string) {
    this.activeCategory.set(category);
  }


  onRemoveFromCart(productId: string) {
    this.cartItems.update(items => items.filter(i => i.product.id !== productId));
  }

  onHold() {
    // Implement hold logic — e.g. save current cart to a "held bills" list
  }

  onClearCart() {
    this.cartItems.set([]);
  }
  
}
