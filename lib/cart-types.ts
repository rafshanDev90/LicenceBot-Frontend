// Cart types and interfaces for the e-commerce system

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  shortDescription: string | null;
  imageUrl: string | null;
  regularPrice: number | null;
  salePrice: number | null;
  quantity: number;
  productType: string;
  licenseType: string | null;
  stockCount: number;
  product_slug: string | null;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
  totalItems: number;
  totalPrice: number;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDays: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  type: 'cod' | 'online' | 'card';
}

export interface CheckoutData {
  shippingAddress: ShippingAddress | null;
  shippingMethod: ShippingMethod | null;
  paymentMethod: PaymentMethod | null;
}

export type CheckoutStep = 'shipping' | 'summary' | 'payment' | 'confirmation';

export interface OrderSummary {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

// Helper functions
export const calculateItemPrice = (item: CartItem): number => {
  const price = item.salePrice ?? item.regularPrice ?? 0;
  return price * item.quantity;
};

export const calculateCartTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + calculateItemPrice(item), 0);
};

export const calculateCartItemsCount = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.quantity, 0);
};
