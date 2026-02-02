
export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  description: string;
  image: string;
  category: string;
  origin: string;
  weight: string;
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export enum CheckoutStep {
  DELIVERY = 1,
  PAYMENT = 2,
  CONFIRMATION = 3
}
