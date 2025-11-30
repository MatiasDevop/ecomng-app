import { Component, inject, input, output } from '@angular/core';
import { Product } from '../../models/product';
import { MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-product-card',
  imports: [MatAnchor, MatIcon],
  templateUrl: './product-card.html',
  styles: ``,
})
export class ProductCardComponent {
  // Recieves product data as input from parent component
  product = input.required<Product>();
  // Emits event when "Add to Cart" button is clicked to notify parent component
  store = inject(EcommerceStore);
}
