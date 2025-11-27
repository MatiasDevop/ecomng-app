import { computed, inject } from '@angular/core';
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
import { produce } from 'immer';
import { ToasterService } from './services/toaster.service';

export type EcommerceState = {
  products: Product[];
  category: string;
  wishlistItems: Product[];
};

export const EcommerceStore = signalStore(
  {
    providedIn: 'root',
  },
  withState({
    products: products, // Initial list of products
    category: 'All', // Default category
    wishlistItems: [], // Initially empty wishlist
  } as EcommerceState),
  withComputed(({ category, products, wishlistItems }) => ({
    filteredProducts: computed(() => {
      if (category() === 'All') return products();
      return products().filter((p) => p.category === category().toLowerCase());
    }),
    wishlistCount: computed(() => wishlistItems().length),
  })),
  withMethods((store, toaster = inject(ToasterService)) => ({
    setCategory: signalMethod<string>((category: string) => {
      patchState(store, { category });
    }),
    addToWishlist: (product: Product) => {
      const updatedWishlistItems = produce(store.wishlistItems(), (draft) => {
        if (!draft.find((p) => p.id === product.id)) {
          draft.push(product);
        }
      });

      patchState(store, { wishlistItems: updatedWishlistItems });
      toaster.success('Product added to wishlist!');
    },

    removeFromWishlist: (product: Product) => {
      patchState(store, {
        wishlistItems: store.wishlistItems().filter((p) => p.id !== product.id),
      });
      toaster.success('Product removed from wishlist.');
    },

    clearWishlist: () => {
      patchState(store, { wishlistItems: [] });
      toaster.success('Wishlist cleared.');
    },
  }))
);
