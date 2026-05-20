import type { Product, User, Cart } from './types';

export const mockProducts: Product[] = [
  {
    id: "prod_01J2A8B9",
    title: "AeroFit Minimalist Running Shoes",
    slug: "aerofit-minimalist-running-shoes",
    description: "Engineered with breathable mesh upper and a zero-drop flexible sole to mimic barefoot running while protecting from the elements.",
    price: 89.99,
    currency: "USD",
    category: "Footwear",
    tags: ["running", "eco-friendly", "athletic"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80"
    ],
    rating: {
      average: 4.6,
      count: 142
    },
    inventory: {
      status: "in_stock",
      quantity: 45
    },
    specifications: {
      weight: "210g",
      material: "Recycled Polyester & Rubber",
      origin: "Made in Vietnam"
    },
    createdAt: "2025-11-14T08:30:00Z"
  },
  {
    id: "prod_02K3C9D0",
    title: "Chrono-Classic Chronograph Watch",
    slug: "chrono-classic-chronograph-watch",
    description: "Water-resistant up to 50m with a genuine Italian leather strap and Japanese quartz movement. Perfect for both casual and formal wear.",
    price: 145.00,
    currency: "USD",
    category: "Accessories",
    tags: ["watches", "classic", "leather"],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
    ],
    rating: {
      average: 4.8,
      count: 89
    },
    inventory: {
      status: "low_stock",
      quantity: 3
    },
    specifications: {
      caseSize: "42mm",
      strapMaterial: "Leather",
      movement: "Quartz"
    },
    createdAt: "2026-01-20T14:15:22Z"
  },
  {
    id: "prod_03L4E1F2",
    title: "HydroPulse Insulated Water Bottle",
    slug: "hydropulse-insulated-water-bottle",
    description: "Double-walled vacuum insulation keeps your drinks ice-cold for 24 hours or piping hot for 12 hours. Features a leak-proof straw lid.",
    price: 32.50,
    currency: "USD",
    category: "Kitchen & Outdoors",
    tags: ["fitness", "gear", "hydration"],
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80"
    ],
    rating: {
      average: 4.3,
      count: 310
    },
    inventory: {
      status: "in_stock",
      quantity: 120
    },
    specifications: {
      capacity: "32 oz / 950ml",
      material: "18/8 Stainless Steel",
      bpaFree: true
    },
    createdAt: "2026-02-05T09:00:00Z"
  }
];

export const mockUser: User = {
  id: "usr_99X7V6U5",
  email: "alex.mercer@example.com",
  username: "alexm_dev",
  firstName: "Alex",
  lastName: "Mercer",
  phoneNumber: "+1 (555) 234-5678",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80",
  role: "customer",
  isActive: true,
  shippingAddress: {
    street: "742 Evergreen Terrace",
    city: "Springfield",
    state: "IL",
    postalCode: "62704",
    country: "US"
  },
  billingAddress: {
    street: "742 Evergreen Terrace",
    city: "Springfield",
    state: "IL",
    postalCode: "62704",
    country: "US"
  },
  paymentMethods: [
    {
      id: "pay_mthd_01",
      type: "credit_card",
      provider: "Visa",
      last4: "4242",
      expiry: "12/28",
      isDefault: true
    }
  ],
  joinedAt: "2024-05-12T11:22:33Z"
};

export const mockCart: Cart = {
  cartId: "crt_55M4N3B2",
  userId: "usr_99X7V6U5",
  items: [
    {
      productId: "prod_01J2A8B9",
      title: "AeroFit Minimalist Running Shoes",
      price: 89.99,
      quantity: 1,
      selectedOptions: {
        size: "10.5",
        color: "Stealth Black"
      },
      itemTotal: 89.99
    },
    {
      productId: "prod_03L4E1F2",
      title: "HydroPulse Insulated Water Bottle",
      price: 32.50,
      quantity: 2,
      selectedOptions: {
        color: "Ocean Blue"
      },
      itemTotal: 65.00
    }
  ],
  summary: {
    itemCount: 3,
    subtotal: 154.99,
    shipping: 5.00,
    tax: 12.40,
    discount: 0.00,
    total: 172.39,
    currency: "USD"
  },
  updatedAt: "2026-05-20T07:14:02Z"
};
