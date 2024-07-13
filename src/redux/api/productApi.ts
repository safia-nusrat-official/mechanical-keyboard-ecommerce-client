// @ts-nocheck

import { baseApi } from "./baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params: {
        limit?: number;
        sort?: string;
        page?: number;
        searchTerm?: string;
        fields?: string;
        filter?: string;
      }) => {
        return {
          url: `/products`,
          method: "GET",
          params,
        };
      },
      providesTags: ["products"],
    }),
    getSingleProduct: builder.query({
      query: (id: string) => {
        return {
          url: `/products/${id}`,
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productsApi;
