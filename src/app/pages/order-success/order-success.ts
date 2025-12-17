import { MatButton } from '@angular/material/button';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-success',
  imports: [MatButton, MatIcon, RouterLink],
  template: `
    <div class="flex justify-center items-center h-[calc(100vh-64px)] py-6">
      <div
        class="flex flex-col justify-center items-center text-center bg-white p-8 rounded-xl shadow gap-6"
      >
        <mat-icon class="!text-green-500 !h-[56px] !w-[56px] !text-[56px]"
          >check_circle</mat-icon
        >
        <h2 class="text-3xl font-semibold mt-4 mb-2">
          Order Placed Successfully!
        </h2>
        <p class="text-base">
          Thank you for your purchase. Your order has been confirmed and will be
          shipped soon.
        </p>
        <p class="text-gray-600">
          You will receive an email confirmation shortly with your order details
          and tracking information.
        </p>
        <button
          matButton="filled"
          color="primary"
          class="w-full max-w-xs mt-2"
          routerLink="/"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export default class OrderSuccessComponent {}
