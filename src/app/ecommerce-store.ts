import { computed } from '@angular/core';
import { products } from './constant';
import { Product } from './models/product';
import {
  patchState,
  signalMethod,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

export type EcommerceState = {
  products: Product[];
  category: string;
};

export const EcommerceStore = signalStore(
  {
    providedIn: 'root',
  },
  withState({
    products: products,
    category: 'All',
  }),
  withComputed(({ category, products }) => ({
    filteredProducts: computed(() => {
      if (category() === 'All') return products();
      return products().filter((p) => p.category === category().toLowerCase());
    }),
  })),
  withMethods((store) => ({
    setCategory: signalMethod<string>((category: string) => {
      patchState(store, { category });
    }),
  }))
);
