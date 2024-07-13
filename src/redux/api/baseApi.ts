import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/api`,
  }),
  endpoints: () => ({}),
  tagTypes: ["products", "product"],
});

console.log(baseApi.endpoints);
