import { Component, inject } from '@angular/core';
import { EcommerceStore } from '../../ecommerce-store';
import { BackButtonComponent } from '../../components/back-button/back-button.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-my-wishlist',
  imports: [BackButtonComponent, ProductCardComponent],
  templateUrl: './my-wishlist.html',
  styles: ``,
})
export default class MyWishlistComponent {
  store = inject(EcommerceStore);
}
