import { Component, inject } from '@angular/core';
import { EcommerceStore } from '../../ecommerce-store';
import { BackButton } from '../../components/back-button/back-button';
import { ProductCardComponent } from '../../components/product-card/product-card';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { EmptyWishlist } from './empty-wishlist/empty-wishlist';

@Component({
  selector: 'app-my-wishlist',
  imports: [BackButton, ProductCardComponent, MatIcon, MatIconButton, EmptyWishlist],
  templateUrl: './my-wishlist.html',
  styles: ``,
})
export default class MyWishlistComponent {
  store = inject(EcommerceStore);
}
