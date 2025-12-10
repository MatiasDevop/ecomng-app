import { MatIcon } from '@angular/material/icon';
import { Component } from '@angular/core';
import { ViewPanel } from '../../../directives/view-panel.directive';

@Component({
  selector: 'app-payment-form',
  imports: [ViewPanel, MatIcon],
  template: `
    <div appViewPanel>
      <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
        <mat-icon class="text-gray-400 text-6xl">payment</mat-icon>
        Payment Information
      </h2>
      <div>
        <mat-radio-group> </mat-radio-group>
      </div>
    </div>
  `,
  styles: ``,
})
export class PaymentForm {}
