import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ICart } from "../../../types";

const initialState: {
  items: ICart[];
  totalItems: number;
} = {
  items: [],
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  reducers: {
    ADD_TO_CART: (state, action: PayloadAction<ICart>) => {
      const productAlreadyAdded = state.items.filter(
        (item) => item.product._id===action.payload.product._id
      )[0];
      if (!productAlreadyAdded) {
        let id = (Math.ceil(Math.random() * 10) + state.items.length + 1)
          .toString()
          .padStart(3, "0");

        state.items.push({ ...action.payload, id });
        state.totalItems += action.payload.orderedQuantity;
      } else {
        productAlreadyAdded.orderedQuantity += action.payload.orderedQuantity;
      }
    },
    REMOVE_FROM_CART: (state, action: PayloadAction<{ id: string }>) => {
      state.items.filter((item) => item.id !== action.payload.id);
    },
  },
  initialState,
});

export const { ADD_TO_CART, REMOVE_FROM_CART } = cartSlice.actions;
export const getCartItems = (state: RootState) => state.cart;

export default cartSlice.reducer;
