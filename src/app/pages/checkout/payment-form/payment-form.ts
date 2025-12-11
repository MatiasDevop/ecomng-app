import { MatIcon } from '@angular/material/icon';
import { Component } from '@angular/core';
import { ViewPanel } from '../../../directives/view-panel.directive';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';

@Component({
  selector: 'app-payment-form',
  imports: [ViewPanel, MatIcon, MatRadioGroup, MatRadioButton],
  template: `
    <div appViewPanel>
      <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
        <mat-icon class="text-gray-400 text-6xl">payment</mat-icon>
        Payment Optoins
      </h2>
      <div>
        <mat-radio-group [value]="'stripe'">
          <mat-radio-button class="block mb-4" value="stripe">
            <img src="stripe-logo.png" alt="stripe" class="h-8 inline" />
          </mat-radio-button>
        </mat-radio-group>
      </div>
    </div>
  `,
  styles: ``,
})
export class PaymentForm {}
