import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ICart } from "../../../types";

const initialState: ICart[] = [];

const cartSlice = createSlice({
  name: "cart",
  reducers: {
    ADD_TO_CART: (state, action: PayloadAction<ICart>) => {
      state.push(action.payload);
    },
    REMOVE_FROM_CART: (state, action: PayloadAction<{ id: string }>) => {
      state.filter((item) => item.id !== action.payload.id);
    },
  },
  initialState,
});

export const { ADD_TO_CART, REMOVE_FROM_CART } = cartSlice.actions;
export const getCartItems = (state: RootState) => state.cart;

export default cartSlice.reducer;
