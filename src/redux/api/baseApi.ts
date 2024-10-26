import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),
  endpoints: (builder) => ({
    createPlants: builder.mutation({
      query: (data) => ({
        url: "/product/create-product",
        method: "POST",
        body: data,
      }),
    }),

    creteOrder: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/bookings`,
          body: data,
        };
      },
    }),
  }),
});

export const { useCreatePlantsMutation, useCreteOrderMutation } = baseApi;
