import { Component, computed, inject, input, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../../components/product-card/product-card';
import {
  MatSidenavContainer,
  MatSidenavContent,
  MatSidenav,
} from '@angular/material/sidenav';

import {
  MatListItem,
  MatNavList,
  MatListItemTitle,
} from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { EcommerceStore } from '../../ecommerce-store';
import { ToggleWishlistButtonComponent } from '../../components/toggle-wishlist-button/toggle-wishlist-button';

@Component({
  selector: 'app-products-grid',
  imports: [
    ProductCardComponent,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatNavList,
    MatListItem,
    MatListItemTitle,
    RouterLink,
    TitleCasePipe,
    ToggleWishlistButtonComponent,
  ],
  templateUrl: './products-grid.html',
  styles: ``,
})
export default class ProductsGridComponent {
  category = input<string>('All'); // this value will be passed from parent component

  // this sections is moved to ecommerce-store.ts
  // products = signal<Product[]>(products);

  // filteredProducts = computed(() => {
  //   if (this.category() === 'All') return this.products();
  //   return this.products().filter(
  //     (p) => p.category === this.category().toLowerCase()
  //   );
  // });
  store = inject(EcommerceStore);

  categories = signal<string[]>(['All', 'Electronics', 'Clothing']);

  constructor() {
    this.store.setCategory(this.category);
  }
}
