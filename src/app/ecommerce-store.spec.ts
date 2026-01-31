import { TestBed } from '@angular/core/testing';
import { EcommerceStore } from './ecommerce-store';
import { Toaster } from './services/toaster';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Product } from './models/product';
import { SignInDialog } from './components/sign-in-dialog/sign-in-dialog';

describe('EcommerceStore', () => {
  let store: InstanceType<typeof EcommerceStore>;
  let toasterSpy: jasmine.SpyObj<Toaster>;
  let matDialogSpy: jasmine.SpyObj<MatDialog>;
  let routerSpy: jasmine.SpyObj<Router>;

  const mockProduct: Product = {
    id: 'p1',
    name: 'Test Product',
    description: 'Test Description',
    price: 99.99,
    imageUrl: 'test.jpg',
    rating: 4.5,
    reviewCount: 10,
    inStock: true,
    category: 'electronics',
    reviews: [],
  };

  const mockProduct2: Product = {
    id: 'p2',
    name: 'Test Product 2',
    description: 'Test Description 2',
    price: 49.99,
    imageUrl: 'test2.jpg',
    rating: 3.5,
    reviewCount: 5,
    inStock: true,
    category: 'fashion',
    reviews: [],
  };

  beforeEach(() => {
    // Clear localStorage to prevent state persistence between tests
    localStorage.clear();

    toasterSpy = jasmine.createSpyObj('Toaster', ['success', 'error']);
    matDialogSpy = jasmine.createSpyObj('MatDialog', ['open', 'getDialogById']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        EcommerceStore,
        { provide: Toaster, useValue: toasterSpy },
        { provide: MatDialog, useValue: matDialogSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });

    store = TestBed.inject(EcommerceStore);
  });

  describe('Initial State', () => {
    it('should have default category "All"', () => {
      expect(store.category()).toBe('All');
    });

    it('should have empty wishlist', () => {
      expect(store.wishlistItems()).toEqual([]);
      expect(store.wishlistCount()).toBe(0);
    });

    it('should have empty cart', () => {
      expect(store.cartItems()).toEqual([]);
      expect(store.cartCount()).toBe(0);
    });

    it('should have no user logged in', () => {
      expect(store.user()).toBeUndefined();
    });

    it('should not be loading', () => {
      expect(store.loading()).toBe(false);
    });

    it('should have no selected product', () => {
      expect(store.selectedProductId()).toBeUndefined();
      expect(store.selectedProduct()).toBeUndefined();
    });

    it('should have writeReview as false', () => {
      expect(store.writeReview()).toBe(false);
    });
  });

  describe('Category Management', () => {
    it('should set category', () => {
      store.setCategory('electronics');
      expect(store.category()).toBe('electronics');
    });

    it('should filter products by category', () => {
      store.setCategory('All');
      const allProducts = store.filteredProducts();
      expect(allProducts.length).toBeGreaterThan(0);

      store.setCategory('electronics');
      const electronicsProducts = store.filteredProducts();
      expect(electronicsProducts.every(p => p.category === 'electronics')).toBe(true);
    });

    it('should return all products when category is "All"', () => {
      store.setCategory('All');
      const filtered = store.filteredProducts();
      const all = store.products();
      expect(filtered.length).toBe(all.length);
    });
  });

  describe('Product Selection', () => {
    it('should set selected product ID', () => {
      const productId = store.products()[0].id;
      store.setProductId(productId);
      expect(store.selectedProductId()).toBe(productId);
    });

    it('should compute selected product from ID', () => {
      const product = store.products()[0];
      store.setProductId(product.id);
      expect(store.selectedProduct()).toEqual(product);
    });

    it('should return undefined when selected product ID does not exist', () => {
      store.setProductId('non-existent-id');
      expect(store.selectedProduct()).toBeUndefined();
    });
  });

  describe('Wishlist Management', () => {
    it('should add product to wishlist', () => {
      store.addToWishlist(mockProduct);
      expect(store.wishlistItems()).toContain(mockProduct);
      expect(store.wishlistCount()).toBe(1);
      expect(toasterSpy.success).toHaveBeenCalledWith('Product added to wishlist!');
    });

    it('should not add duplicate product to wishlist', () => {
      store.addToWishlist(mockProduct);
      store.addToWishlist(mockProduct);
      expect(store.wishlistItems().length).toBe(1);
      expect(store.wishlistCount()).toBe(1);
    });

    it('should add multiple different products to wishlist', () => {
      store.addToWishlist(mockProduct);
      store.addToWishlist(mockProduct2);
      expect(store.wishlistItems().length).toBe(2);
      expect(store.wishlistCount()).toBe(2);
    });

    it('should remove product from wishlist', () => {
      store.addToWishlist(mockProduct);
      store.removeFromWishlist(mockProduct);
      expect(store.wishlistItems()).not.toContain(mockProduct);
      expect(store.wishlistCount()).toBe(0);
      expect(toasterSpy.success).toHaveBeenCalledWith('Product removed from wishlist.');
    });

    it('should clear all wishlist items', () => {
      store.addToWishlist(mockProduct);
      store.addToWishlist(mockProduct2);
      store.clearWishlist();
      expect(store.wishlistItems()).toEqual([]);
      expect(store.wishlistCount()).toBe(0);
      expect(toasterSpy.success).toHaveBeenCalledWith('Wishlist cleared.');
    });
  });

  describe('Cart Management', () => {
    it('should add product to cart with default quantity 1', () => {
      store.addToCart(mockProduct);
      expect(store.cartItems().length).toBe(1);
      expect(store.cartItems()[0].product).toEqual(mockProduct);
      expect(store.cartItems()[0].quantity).toBe(1);
      expect(store.cartCount()).toBe(1);
      expect(toasterSpy.success).toHaveBeenCalledWith('Product added to cart!');
    });

    it('should add product to cart with custom quantity', () => {
      store.addToCart(mockProduct, 3);
      expect(store.cartItems()[0].quantity).toBe(3);
      expect(store.cartCount()).toBe(3);
    });

    it('should increase quantity when adding existing product to cart', () => {
      store.addToCart(mockProduct, 2);
      store.addToCart(mockProduct, 1);
      expect(store.cartItems().length).toBe(1);
      expect(store.cartItems()[0].quantity).toBe(3);
      expect(store.cartCount()).toBe(3);
      expect(toasterSpy.success).toHaveBeenCalledWith('Product added again');
    });

    it('should add multiple different products to cart', () => {
      store.addToCart(mockProduct, 2);
      store.addToCart(mockProduct2, 3);
      expect(store.cartItems().length).toBe(2);
      expect(store.cartCount()).toBe(5); // 2 + 3
    });

    it('should set item quantity', () => {
      store.addToCart(mockProduct, 1);
      store.setItemQuantity({ productId: mockProduct.id, quantity: 5 });
      expect(store.cartItems()[0].quantity).toBe(5);
      expect(store.cartCount()).toBe(5);
    });

    it('should remove product from cart', () => {
      store.addToCart(mockProduct);
      store.removeFromCart(mockProduct);
      expect(store.cartItems()).toEqual([]);
      expect(store.cartCount()).toBe(0);
      expect(toasterSpy.success).toHaveBeenCalledWith('Product removed from cart.');
    });

    it('should calculate correct cart count with multiple items', () => {
      store.addToCart(mockProduct, 2);
      store.addToCart(mockProduct2, 3);
      expect(store.cartCount()).toBe(5);
    });
  });

  describe('Wishlist to Cart Operations', () => {
    it('should add all wishlist items to cart', () => {
      store.addToWishlist(mockProduct);
      store.addToWishlist(mockProduct2);
      store.addAllWishlistToCart();

      expect(store.cartItems().length).toBe(2);
      expect(store.cartItems()[0].quantity).toBe(1);
      expect(store.cartItems()[1].quantity).toBe(1);
      expect(store.wishlistItems()).toEqual([]);
      expect(toasterSpy.success).toHaveBeenCalledWith('All wishlist items added to cart!');
    });

    it('should not duplicate products when adding wishlist to cart', () => {
      store.addToCart(mockProduct, 2);
      store.addToWishlist(mockProduct);
      store.addToWishlist(mockProduct2);
      store.addAllWishlistToCart();

      expect(store.cartItems().length).toBe(2);
      const existingItem = store.cartItems().find(item => item.product.id === mockProduct.id);
      expect(existingItem?.quantity).toBe(2); // Should not change
    });

    it('should move product from cart to wishlist', () => {
      store.addToCart(mockProduct, 2);
      store.moveToWishlist(mockProduct);

      expect(store.cartItems().length).toBe(0);
      expect(store.wishlistItems()).toContain(mockProduct);
      expect(toasterSpy.success).toHaveBeenCalledWith('Product moved to wishlist!');
    });

    it('should not duplicate product when moving to wishlist', () => {
      store.addToWishlist(mockProduct);
      store.addToCart(mockProduct, 2);
      store.moveToWishlist(mockProduct);

      expect(store.wishlistItems().length).toBe(1);
    });
  });

  describe('Checkout Flow', () => {
    it('should open sign-in dialog when user is not logged in', () => {
      store.proceedToCheckout();

      expect(matDialogSpy.open).toHaveBeenCalledWith(SignInDialog, {
        disableClose: true,
        data: { checkout: true },
      });
      expect(routerSpy.navigate).not.toHaveBeenCalled();
    });

    it('should navigate to checkout when user is logged in', () => {
      store.signIn({ email: 'test@example.com', password: 'password123', checkout: false, dialogId: 'test-dialog' });
      store.proceedToCheckout();

      expect(matDialogSpy.open).not.toHaveBeenCalled();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/checkout']);
    });
  });

  describe('Order Placement', () => {
    it('should show error when placing order without user', async () => {
      await store.placeOrder();

      expect(toasterSpy.error).toHaveBeenCalledWith('Please login before placing the order.');
      expect(store.loading()).toBe(false);
      expect(routerSpy.navigate).not.toHaveBeenCalled();
    });

    it('should place order successfully when user is logged in', async () => {
      store.signIn({ email: 'test@example.com', password: 'password123', checkout: false, dialogId: 'test-dialog' });
      store.addToCart(mockProduct, 2);

      const placeOrderPromise = store.placeOrder();
      expect(store.loading()).toBe(true);

      await placeOrderPromise;

      expect(store.loading()).toBe(false);
      expect(store.cartItems()).toEqual([]);
      expect(routerSpy.navigate).toHaveBeenCalledWith(['order-success']);
    });
  });

  describe('User Authentication', () => {
    it('should sign in user', () => {
      const mockDialogRef = { close: jasmine.createSpy('close') } as Partial<MatDialogRef<unknown>>;
      matDialogSpy.getDialogById.and.returnValue(mockDialogRef as MatDialogRef<unknown>);

      store.signIn({ email: 'test@example.com', password: 'password123', checkout: false, dialogId: 'dialog-1' });

      expect(store.user()).toBeDefined();
      expect(store.user()?.email).toBe('test@example.com');
      expect(mockDialogRef.close).toHaveBeenCalled();
      expect(routerSpy.navigate).not.toHaveBeenCalled();
    });

    it('should navigate to checkout after sign in when checkout flag is true', () => {
      const mockDialogRef = { close: jasmine.createSpy('close') } as Partial<MatDialogRef<unknown>>;
      matDialogSpy.getDialogById.and.returnValue(mockDialogRef as MatDialogRef<unknown>);

      store.signIn({ email: 'test@example.com', password: 'password123', checkout: true, dialogId: 'dialog-1' });

      expect(routerSpy.navigate).toHaveBeenCalledWith(['/checkout']);
    });

    it('should sign up user', () => {
      const mockDialogRef = { close: jasmine.createSpy('close') } as Partial<MatDialogRef<unknown>>;
      matDialogSpy.getDialogById.and.returnValue(mockDialogRef as MatDialogRef<unknown>);

      store.signUp({ name: 'New User', email: 'newuser@example.com', password: 'password123', checkout: false, dialogId: 'dialog-1' });

      expect(store.user()).toBeDefined();
      expect(store.user()?.email).toBe('newuser@example.com');
      expect(mockDialogRef.close).toHaveBeenCalled();
    });

    it('should navigate to checkout after sign up when checkout flag is true', () => {
      const mockDialogRef = { close: jasmine.createSpy('close') } as Partial<MatDialogRef<unknown>>;
      matDialogSpy.getDialogById.and.returnValue(mockDialogRef as MatDialogRef<unknown>);

      store.signUp({ name: 'New User', email: 'newuser@example.com', password: 'password123', checkout: true, dialogId: 'dialog-1' });

      expect(routerSpy.navigate).toHaveBeenCalledWith(['/checkout']);
    });

    it('should sign out user', () => {
      store.signIn({ email: 'test@example.com', password: 'password123', checkout: false, dialogId: 'dialog-1' });
      store.signOut();

      expect(store.user()).toBeUndefined();
      expect(toasterSpy.success).toHaveBeenCalledWith('Signed out ...');
    });
  });

  describe('Review Management', () => {
    it('should show write review panel', () => {
      store.showWriteReview();
      expect(store.writeReview()).toBe(true);
    });

    it('should hide write review panel', () => {
      store.showWriteReview();
      store.hideWriteReview();
      expect(store.writeReview()).toBe(false);
    });

    it('should set loading state when adding review', () => {
      const product = store.products()[0];
      store.setProductId(product.id);
      store.signIn({ email: 'test@example.com', password: 'password123', checkout: false, dialogId: 'dialog-1' });

      store.addReview({
        title: 'Great product',
        comment: 'I love it!',
        rating: 5,
      });

      // Note: addReview implementation is incomplete - it sets loading to true but never resets it
      // This test documents the current behavior
      expect(store.loading()).toBe(true);
    });

    it('should not add review when product is not selected', async () => {
      store.signIn({ email: 'test@example.com', password: 'password123', checkout: false, dialogId: 'dialog-1' });

      await store.addReview({
        title: 'Great product',
        comment: 'I love it!',
        rating: 5,
      });

      expect(store.loading()).toBe(false);
    });
  });

  describe('Computed Signals', () => {
    it('should compute wishlist count correctly', () => {
      expect(store.wishlistCount()).toBe(0);
      store.addToWishlist(mockProduct);
      expect(store.wishlistCount()).toBe(1);
      store.addToWishlist(mockProduct2);
      expect(store.wishlistCount()).toBe(2);
    });

    it('should compute cart count correctly', () => {
      expect(store.cartCount()).toBe(0);
      store.addToCart(mockProduct, 3);
      expect(store.cartCount()).toBe(3);
      store.addToCart(mockProduct2, 2);
      expect(store.cartCount()).toBe(5);
    });

    it('should update filtered products when category changes', () => {
      store.setCategory('All');
      const allCount = store.filteredProducts().length;

      store.setCategory('electronics');
      const electronicsCount = store.filteredProducts().length;

      expect(electronicsCount).toBeLessThanOrEqual(allCount);
    });
  });

  describe('Edge Cases', () => {
    it('should handle removing non-existent product from wishlist', () => {
      const initialCount = store.wishlistCount();
      store.removeFromWishlist(mockProduct);
      expect(store.wishlistCount()).toBe(initialCount);
    });

    it('should handle removing non-existent product from cart', () => {
      const initialCount = store.cartCount();
      store.removeFromCart(mockProduct);
      expect(store.cartCount()).toBe(initialCount);
    });

    it('should handle empty wishlist when adding all to cart', () => {
      store.addAllWishlistToCart();
      expect(store.cartItems()).toEqual([]);
      expect(toasterSpy.success).toHaveBeenCalled();
    });

    it('should handle dialog not found when signing in', () => {
      matDialogSpy.getDialogById.and.returnValue(undefined);
      expect(() => {
        store.signIn({ email: 'test@example.com', password: 'password123', checkout: false, dialogId: 'non-existent' });
      }).not.toThrow();
    });
  });
});
