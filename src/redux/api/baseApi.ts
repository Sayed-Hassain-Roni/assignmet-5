import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment-05-backend.vercel.app/api/",
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
