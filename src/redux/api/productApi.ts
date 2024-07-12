// @ts-nocheck

import { baseApi } from "./baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => {
        return {
          url: `/products`,
          method: "GET",
          params,
        };
      },
      providesTags: ["products"],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
