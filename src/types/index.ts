export interface ICart {
    id:string,
    itemId:string,
    quantity:number
}

export interface IProduct {
    _id:string;
    title: string;
    image:string;
    description: string;
    price: number;
    rating: number;
    brand: string;
    availableQuantity: number;
  }