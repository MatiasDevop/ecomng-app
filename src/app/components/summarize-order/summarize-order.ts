import { Component, computed, inject } from '@angular/core';
import { ViewPanel } from '../../directives/view-panel.directive';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-summarize-order',
  imports: [ViewPanel],
  template: `
    <div appViewPanel>
      <h2 class="text-2xl font-bold mb-4">Order Summary</h2>
      <div class="space-y-3 text-lg pt-4">
        <div class="flex justify-between">
          <span>Subtotal</span>
          <span>$ {{ subtotal() }}</span>
        </div>
        <div class="flex justify-between">
          <span>Tax</span>
          <span>$ {{ tax() }} (21%)</span>
        </div>
        <div class="flex justify-between border-t-2 pt-3 font-bold text-xl">
          <span>Total</span>
          <span>$ {{ total() }}</span>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class SummarizeOrder {
  store = inject(EcommerceStore);

  subtotal = computed(() =>
    Math.round(
      this.store
        .cartItems()
        .reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    )
  );

  tax = computed(() => Math.round(this.subtotal() * 0.21));

  total = computed(() => this.subtotal() - this.tax());
}
