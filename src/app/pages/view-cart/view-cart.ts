import { SummarizeOrder } from './../../components/summarize-order/summarize-order';
import { Component, inject } from '@angular/core';
import { BackButton } from '../../components/back-button/back-button';
import { ListCartItems } from './list-cart-items/list-cart-items';
import { TeaseWishlist } from './tease-wishlist/tease-wishlist';
import { MatAnchor } from '@angular/material/button';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-view-cart',
  imports: [
    BackButton,
    ListCartItems,
    TeaseWishlist,
    SummarizeOrder,
    MatAnchor,
  ],
  template: `
    <div class="mx-auto max-w-[1200px] py-6 flex flex-col gap-4">
      <app-back-button navigateTo="/products/All">Back to Home</app-back-button>
      <h1 class="text-3xl font-extrabold mb-4">Shopping Cart</h1>

      <app-tease-wishlist />

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 ">
          <app-list-cart-items />
        </div>
        <div>
          <app-summarize-order>
            <ng-container actionButtons>
              <button
                matButton="filled"
                class="w-full mt-6 py-3"
                (click)="store.proceedToCheckout()"
              >
                Proceed to Checkout
              </button>
            </ng-container>
          </app-summarize-order>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export default class ViewCart {
  store = inject(EcommerceStore);
}
