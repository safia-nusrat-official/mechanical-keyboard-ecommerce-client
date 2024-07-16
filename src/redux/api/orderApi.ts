import { IOrder } from "@/types";
import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchOrders: builder.query({
      query: () => `/orders`,
    }),
    postOrder: builder.mutation({
      query: (data: IOrder) => ({
        url: `/orders`,
        method: "POST",
        body: data,
      }),
      invalidatesTags:["product", "products", "orders"]
    }),
  }),
});

export const { usePostOrderMutation, useFetchOrdersQuery } = orderApi;
