import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../models/product';
import { EcommerceStore } from '../../ecommerce-store';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-toggle-wishlist-button',
  imports: [MatIcon, MatIconButton],
  template: `
    <button
      [class]="isInWishlist() ? '!text-red-500' : '!text-gray-400'"
      matIconButton
      (click)="toggleWishList(product())"
    >
      <mat-icon class="text-red-500"
        >{{ isInWishlist() ? 'favorite' : 'favorite_border' }}
      </mat-icon>
    </button>
  `,
  styles: ``,
})
export class ToggleWishlistButtonComponent {
  product = input.required<Product>();

  store = inject(EcommerceStore);

  isInWishlist = computed(() =>
    this.store.wishlistItems().find((p) => p.id === this.product().id)
  );
  toggleWishList(product: Product) {
    if (this.isInWishlist()) {
      this.store.removeFromWishlist(product);
    } else {
      this.store.addToWishlist(product);
    }
  }
}
