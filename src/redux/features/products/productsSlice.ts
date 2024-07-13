import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../types";
import { RootState } from "../../store";

const initialState: IProduct[] = [];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    SET_PRODUCTS: (state, action: PayloadAction<IProduct[]>) => {
      state = action.payload;
    },
  },
});

export const { SET_PRODUCTS } = productsSlice.actions;
export const GET_PRODUCTS = (state: RootState) => state.products;
export default productsSlice.reducer;
