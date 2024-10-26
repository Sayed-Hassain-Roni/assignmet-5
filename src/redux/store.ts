import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import ProductReducer, { productsFetch } from "./featues/ProductSlice";
import CartReducer from "./featues/CartSlice";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: CartReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

store.dispatch(productsFetch());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
