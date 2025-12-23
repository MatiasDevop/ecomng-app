import { Component, input } from '@angular/core';
import { Product } from '../../../models/product';
import { ViewPanel } from '../../../directives/view-panel.directive';

@Component({
  selector: 'app-view-reviews',
  imports: [ViewPanel],
  template: `
    <div appViewPanel>
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-extrabold">Customer Reviews</h2>
      </div>
    </div>
  `,
  styles: ``,
})
export class ViewReviews {
  product = input.required<Product>();
}
