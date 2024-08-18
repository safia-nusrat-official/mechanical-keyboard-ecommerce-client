import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`,
  }),
  endpoints: () => ({}),
  tagTypes: ["products", "product", "orders"],
});

console.log(`${import.meta.env.VITE_SERVER_URL}/api`)
