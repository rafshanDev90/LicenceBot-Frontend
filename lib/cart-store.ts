import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, CartState, CheckoutData } from './cart-types';
import { calculateCartTotal, calculateCartItemsCount } from './cart-types';

interface CartStore extends CartState {
  // Cart actions
  addItem: (item: Omit<CartItem, 'id'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  
  // Checkout data
  checkoutData: CheckoutData;
  setCheckoutData: (data: Partial<CheckoutData>) => void;
  clearCheckoutData: () => void;
  
  // Utility methods
  getItemById: (id: string) => CartItem | undefined;
  isInCart: (productId: string) => boolean;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      // Initial state
      items: [],
      isOpen: false,
      totalItems: 0,
      totalPrice: 0,
      checkoutData: {
        shippingAddress: null,
        shippingMethod: null,
        paymentMethod: null,
      },

      // Cart actions
      addItem: (newItem) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.productId === newItem.productId
          );

          let updatedItems: CartItem[];
          
          if (existingItem) {
            // Update quantity if item already exists
            updatedItems = state.items.map((item) =>
              item.productId === newItem.productId
                ? { ...item, quantity: Math.min(item.quantity + newItem.quantity, item.stockCount) }
                : item
            );
          } else {
            // Add new item
            const cartItem: CartItem = {
              ...newItem,
              id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            };
            updatedItems = [...state.items, cartItem];
          }

          return {
            items: updatedItems,
            totalItems: calculateCartItemsCount(updatedItems),
            totalPrice: calculateCartTotal(updatedItems),
            isOpen: true, // Open cart when item is added
          };
        });
      },

      removeItem: (id) => {
        set((state) => {
          const updatedItems = state.items.filter((item) => item.id !== id);
          return {
            items: updatedItems,
            totalItems: calculateCartItemsCount(updatedItems),
            totalPrice: calculateCartTotal(updatedItems),
          };
        });
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }

        set((state) => {
          const updatedItems = state.items.map((item) =>
            item.id === id
              ? { ...item, quantity: Math.min(quantity, item.stockCount) }
              : item
          );
          return {
            items: updatedItems,
            totalItems: calculateCartItemsCount(updatedItems),
            totalPrice: calculateCartTotal(updatedItems),
          };
        });
      },

      clearCart: () => {
        set({
          items: [],
          totalItems: 0,
          totalPrice: 0,
        });
      },

      toggleCart: () => {
        set((state) => ({ isOpen: !state.isOpen }));
      },

      openCart: () => {
        set({ isOpen: true });
      },

      closeCart: () => {
        set({ isOpen: false });
      },

      // Checkout data actions
      setCheckoutData: (data) => {
        set((state) => ({
          checkoutData: { ...state.checkoutData, ...data },
        }));
      },

      clearCheckoutData: () => {
        set({
          checkoutData: {
            shippingAddress: null,
            shippingMethod: null,
            paymentMethod: null,
          },
        });
      },

      // Utility methods
      getItemById: (id) => {
        return get().items.find((item) => item.id === id);
      },

      isInCart: (productId) => {
        return get().items.some((item) => item.productId === productId);
      },
    }),
    {
      name: 'cart-storage', // localStorage key
      partialize: (state) => ({
        items: state.items,
        checkoutData: state.checkoutData,
      }),
    }
  )
);
