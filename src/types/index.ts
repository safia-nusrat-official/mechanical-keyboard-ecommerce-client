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
