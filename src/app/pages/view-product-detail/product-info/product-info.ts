import { Component, input } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-info',
  imports: [],
  template: ` <p>product-info works!</p> `,
  styles: ``,
})
export class ProductInfo {
  product = input.required<Product>();
}
