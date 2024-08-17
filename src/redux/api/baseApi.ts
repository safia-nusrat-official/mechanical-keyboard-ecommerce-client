import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://mechanical-keyboard-ecommerce-server.vercel.app/api`,
  }),
  endpoints: () => ({}),
  tagTypes: ["products", "product", "orders"],
});

