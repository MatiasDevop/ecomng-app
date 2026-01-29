import { MatIcon } from '@angular/material/icon';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empty-wishlist',
  imports: [MatIcon, MatButton, RouterLink],
  template: `
    <div class="flex flex-col items-center justify-center py-20">
      <!-- heart icon -->
      <div class="w-20 h-20 mb-8 flex items-center justify-center rounded-full ">
        <mat-icon class="text-gray-400 transform scale-150">favorite_border</mat-icon>
      </div>

      <!-- message -->
      <h2 class="text-2xl font-bold text-gray-900 mb-3">Your wishlist is empty</h2>
      <p class="text-gray-600 mb-8">Save items you love for later!</p>

      <!-- start shopping button -->
      <button matButton="filled" class="min-w-[200px] py-3" routerLink="/products/All">
        Start Shopping
      </button>
    </div>
  `,
  styles: ``,
})
export class EmptyWishlist {}
