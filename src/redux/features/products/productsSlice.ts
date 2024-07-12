import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../types";
import { RootState } from "../../store";

const initialState: IProduct[] = [];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    ADD_PRODUCT: () => {},
  },
});

export const {} = productsSlice.actions;
export const GET_PRODUCTS = (state: RootState) => state.products;
export default productsSlice.reducer;
