// src/slices/ecommerceSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../../app/api/productApi"; // Update the path accordingly


export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductState {
  products: Product[]; //[Product]
  cart: [];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  cart: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    return await productApi.fetchProducts();
  }
);

const ecommerceSlice = createSlice({
  name: "ecommerce",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      [{}, {}];
      const { productId, quantity } = action.payload;
      const existingProduct = state.cart.find(
        (item) => item.productId === productId
      );
      if (existingProduct) {
        existingProduct.quantity =
          Number(existingProduct.quantity) + Number(quantity);
      } else {
        state.cart.push(action.payload);
      }
      console.log("state-cart", state.cart);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.productId != action.payload
      );
      console.log('after removing form cart', state.cart)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed";
      });
  },
});

export const { addToCart, removeFromCart } = ecommerceSlice.actions;

export default ecommerceSlice.reducer;
