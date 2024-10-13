// src/slices/ecommerceSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from '../../app/api/productApi'; // Update the path accordingly

interface Product {
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
    products: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
};

export const fetchProducts = createAsyncThunk<Product[]>('products/fetchProducts', async () => {
    return await productApi.fetchProducts(); // Call the class method directly
});

const ecommerceSlice = createSlice({
    name: 'ecommerce',
    initialState,
    reducers: {},
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
                state.error = action.error.message || 'Failed';
            });
    }
});

export default ecommerceSlice.reducer;
