// @ts-nocheck

import { baseApi } from "./baseApi";
type TRequestParams = {
  limit?: number;
  sort?: string;
  page?: number;
  searchTerm?: string;
  fields?: string;
  filter?: string;
};

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params: TRequestParams) => {
        console.log(params);
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
