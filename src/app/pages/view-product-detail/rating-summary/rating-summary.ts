import { Component, computed, input } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-rating-summary',
  imports: [],
  template: `
    <div class="flex items-center gap-8 mb-6 p-4 bg-gray-50 rounded-lg">
      <!-- Overall Rating Display: -->
      <div class="flex flex-col items-center w-1/2">
        <div class="text-4xl font-bold text-gray-900 mb-1">
          {{ product().rating }}
        </div>
        <div></div>
      </div>
    </div>
  `,
  styles: ``,
})
export class RatingSummary {
  product = input.required<Product>();

  totalReviews = computed(() => this.product().reviews.length);

  ratingBreakdown = computed(() => {
    const reviews = this.product().reviews;
    const total = reviews.length;

    if (total === 0)
      return [5, 4, 3, 2, 1].map((stars) => ({
        stars,
        count: 0,
        percentage: 0,
      }));

    const counts = [5, 4, 3, 2, 1].map((stars) => {
      const count = reviews.filter((review) => review.rating === stars).length;
      return {
        stars,
        count,
        percentage: Math.round((count / total) * 100),
      };
    });

    return counts;
  });
}
