export interface Rating {
  average: number;
  count: number;
}

export interface Inventory {
  status: 'in_stock' | 'low_stock' | 'out_of_stock';
  quantity: number;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  tags: string[];
  images: string[];
  rating: Rating;
  inventory: Inventory;
  specifications: Record<string, string | boolean | number>;
  createdAt: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface PaymentMethod {
  id: string;
  type: 'credit_card' | 'paypal' | 'apple_pay';
  provider: string;
  last4: string;
  expiry: string;
  isDefault: boolean;
}

export interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  role: 'customer' | 'admin' | 'editor';
  isActive: boolean;
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethods: PaymentMethod[];
  joinedAt: string;
}

export interface CartItem {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  selectedOptions?: Record<string, string>;
  itemTotal: number;
}

export interface CartSummary {
  itemCount: number;
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
  currency: string;
}

export interface Cart {
  cartId: string;
  userId: string;
  items: CartItem[];
  summary: CartSummary;
  updatedAt: string;
}
