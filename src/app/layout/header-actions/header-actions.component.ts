import { Component, inject, signal } from '@angular/core';
import {
  MatButton,
  MatButtonModule,
  MatIconButton,
} from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { EcommerceStore } from '../../ecommerce-store';
import { MatBadge } from '@angular/material/badge';

@Component({
  selector: 'app-header-actions',
  imports: [MatButtonModule, MatIconModule, MatIcon, RouterLink, MatBadge],
  templateUrl: './header-actions.component.html',
  styles: ``,
})
export class HeaderActionsComponent {
  store = inject(EcommerceStore);
  counter = signal<number>(0);
  counterF = this.store.wishlistItems().length;

  constructor() {
    console.log(this.counterF);
  }
}
