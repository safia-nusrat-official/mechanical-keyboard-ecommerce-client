import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ICart } from "../../../types";

const initialState: {
  cartItems: ICart[];
  totalItems: number;
  totalPrice: number;
} = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  reducers: {
    ADD_TO_CART: (state, action: PayloadAction<ICart>) => {
      const { product, orderedQuantity } = action.payload;
      const { _id: productId, price: productPrice } = product;

      const productAlreadyAdded = state.cartItems.filter(
        (item) => item.product._id === productId
      )[0];

      if (!productAlreadyAdded) {
        let id = (Math.ceil(Math.random() * 10) + state.cartItems.length + 1)
          .toString()
          .padStart(3, "0");

        state.cartItems.push({ ...action.payload, id });
      } else {
        productAlreadyAdded.orderedQuantity += orderedQuantity;
      }
      
      state.totalItems += action.payload.orderedQuantity;
      state.totalPrice += productPrice * orderedQuantity;
    },
    REMOVE_FROM_CART: (state, action: PayloadAction<{ cartId: string }>) => {
      const cartItem = state.cartItems.filter(
        (cartItem) => cartItem.id === action.payload.cartId
      )[0];
      const { orderedQuantity, product } = cartItem;
      const { price: productPrice } = product;
      state.totalPrice -= productPrice * orderedQuantity;
      state.totalItems -= orderedQuantity;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.cartId
      );
    },
    REDUCE_QUANTITY: (state, action: PayloadAction<{ cartId: string }>) => {
      const cartItem = state.cartItems.filter(
        (cartItem) => cartItem.id === action.payload.cartId
      )[0];
      const itemPrice = cartItem.product.price;
      cartItem.orderedQuantity -= 1;
      state.totalItems -= 1;
      state.totalPrice -= itemPrice;
    },
    INCREASE_QUANTITY: (state, action: PayloadAction<{ cartId: string }>) => {
      const cartItem = state.cartItems.filter(
        (cartItem) => cartItem.id === action.payload.cartId
      )[0];
      const itemPrice = cartItem.product.price;
      cartItem.orderedQuantity += 1;
      state.totalItems += 1;
      state.totalPrice += itemPrice;
    },
  },
  initialState,
});

export const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REDUCE_QUANTITY,
  INCREASE_QUANTITY,
} = cartSlice.actions;
export const getCartItems = (state: RootState) => state.cart;

export default cartSlice.reducer;
