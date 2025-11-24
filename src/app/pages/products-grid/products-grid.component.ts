import { Component, computed, input, signal } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-grid',
  imports: [],
  templateUrl: './products-grid.component.html',
  styles: ``,
})
export default class ProductsGridComponent {
  category = input<string>('All'); // this value will be passed from parent component

  products = signal<Product[]>([
    //Electpronics
    {
      id: '1',
      name: 'Smartphone XYZ',
      description: 'A high-quality smartphone with advanced features.',
      price: 699.99,
      imageUrl:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
      rating: 4.5,
      reviewCount: 120,
      inStock: true,
      category: 'electronics',
    },
    {
      id: '2',
      name: 'Wireless Headphones ABC',
      description:
        'Noise-cancelling wireless headphones with superior sound quality.',
      price: 199.99,
      imageUrl:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      rating: 4.7,
      reviewCount: 85,
      inStock: true,
      category: 'electronics',
    },
    {
      id: '3',
      name: '4K Ultra HD TV',
      description:
        'Experience stunning visuals with this 4K Ultra HD television.',
      price: 999.99,
      imageUrl:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
      rating: 4.8,
      reviewCount: 60,
      inStock: true,
      category: 'electronics',
    },
  ]);

  filteredProducts = computed(() =>
    this.products().filter((p) => p.category === this.category().toLowerCase())
  );
}
