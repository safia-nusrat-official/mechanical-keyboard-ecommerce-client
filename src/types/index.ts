export interface ICart {
  id?: string;
  product: IProduct;
  orderedQuantity: number;
}

export interface IProduct {
  _id: string;
  title: string;
  images: string[];
  description: string;
  price: number;
  rating: number;
  brand: string;
  availableQuantity: number;
}

export interface IOrder {
  date: string;
  paymentMethod: "cash"|"stripe";
  status: 'delivered' | 'pending' | 'cancelled';
  name: string;
  phone: string;
  address: string;
  email: string;
  orderedProducts: TOrderedProduct[];
  totalPrice: number;
  totalOrderedQuantity: number;
}

export type TOrderedProduct = {
  productId: string;
  orderedQuantity: number;
};