import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface ProductsState {
  items: Product[];
  status: "pending" | "success" | "rejected" | null;
}

const initialState: ProductsState = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk<Product[], void>(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get<Product[]>(
        "https://assignment04-backend.vercel.app/api/v1/product"
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch products");
    }
  }
);

// Create the slice
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        productsFetch.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.items = action.payload;
          state.status = "success";
        }
      )
      .addCase(productsFetch.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default productsSlice.reducer;
