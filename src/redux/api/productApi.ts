import { IProduct } from "@/types";
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
    getProductsCount: builder.query({
      query: () => ({
        url: `/products-count`,
        method: "GET",
      }),
    }),
    getProducts: builder.query({
      query: (params: TRequestParams) => {
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

    updateProduct: builder.mutation({
      query: ({ id, data }: { id: string; data: IProduct }) => {
        return {
          url: `/products/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["product", "products"],
    }),

    createProduct: builder.mutation({
      query: ({ data }: { data: Omit<IProduct, "_id"> }) => {
        return {
          url: `/products/`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["product", "products"],
    }),

    deleteProduct: builder.mutation({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product", "products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useGetProductsCountQuery,
  useUpdateProductMutation,
  useCreateProductMutation,
  useDeleteProductMutation,
} = productsApi;
