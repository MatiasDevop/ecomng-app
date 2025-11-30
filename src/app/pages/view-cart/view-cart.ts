import { MatButton } from '@angular/material/button';
import { Component } from '@angular/core';
import { BackButton } from '../../components/back-button/back-button';
import { ListCartItemsComponent } from './list-cart-items/list-cart-items.component';

@Component({
  selector: 'app-view-cart',
  imports: [BackButton, ListCartItemsComponent],
  template: `
    <div class="mx-auto max-w-[1200px] py-6">
      <app-back-button navigateTo="/products/All">Back to Home</app-back-button>
      <h1 class="text-3xl font-extrabold mb-4">Shopping Cart</h1>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 ">
          <app-list-cart-items />
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export default class ViewCart {}
