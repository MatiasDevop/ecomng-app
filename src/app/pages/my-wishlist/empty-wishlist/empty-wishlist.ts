import { MatIcon } from '@angular/material/icon';
import { Component } from '@angular/core';

@Component({
  selector: 'app-empty-wishlist',
  imports: [MatIcon],
  template: `
    <div class="flex flex-col items-center justify-center py-20">
      <!-- heart icon -->
      <div
        class="w-20 h-20 mb-8 flex items-center justify-center rounded-full "
      >
        <mat-icon class="text-gray-400 transform scale-150"
          >favorite_border</mat-icon
        >
      </div>
    </div>
  `,
  styles: ``,
})
export class EmptyWishlistComponent {}
