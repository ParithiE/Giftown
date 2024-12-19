import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts, fetchProductSizes } from "./product-thunk.ts";
import { Product, ProductResponse, ProductSizeResponse, ProductSizes } from "../types/Product";

export interface ProductsState {
    products: Array<Product>;
    pagesCount: number;
    totalElements: number;
    loadingState: any;
}

// export interface ProductSizeState {
//    productSizes: Array<ProductSizes>
// }

// export const initialProductSizesState: ProductSizeState = {
//     productSizes: [],
// };


export const initialState: ProductsState = {
    products: [],
    pagesCount: 1,
    totalElements: 0,
    loadingState: true,
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<Array<Product>>) {
            state.products = action.payload;
           state.loadingState = false;
        },
        resetProductsState: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            console.log("Pending");
             state.loadingState = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<ProductResponse>) => {
            console.log("Fullfilled");
            state.products = action.payload.items;
            state.pagesCount = action.payload.pagesCount;
            state.totalElements = action.payload.totalElements;
            state.loadingState = false;
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            console.log("Rejected");
            //state.loadingState = LoadingStatus.FAILED;
        });
    },
});


// export const productSizesSlice = createSlice({
//     name: "productSizes",
//     initialState: initialProductSizesState,
//     reducers: {
//         setProductSizes(state, action: PayloadAction<Array<ProductSizes>>) {
//             state.productSizes = action.payload;
//         },
//         resetProductSizesState: () => initialProductSizesState,
//         extraReducers: (builder) => {
//             builder.addCase(fetchProductSizes.pending, (state) => {
//                  state.loadingState = true;
//             });
//             builder.addCase(fetchProductSizes.fulfilled, (state, action: PayloadAction<ProductSizeResponse>) => {
//                 state.productSizes = action.payload.items;
//             });
//             builder.addCase(fetchProductSizes.rejected, (state) => {
//                 //state.loadingState = LoadingStatus.FAILED;
//             });
//         },
//     },
// });

export const { setProducts, resetProductsState } = productsSlice.actions;
export default productsSlice.reducer;


// // src/store/productSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import ProductService from '../services/product-service';

// // Async thunk for fetching products
// export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
//   const response = await ProductService.getAllProducts(); // Fetch all products
//   return response.data; // Assuming the response structure has data
// });

// const productSlice = createSlice({
//   name: 'products',
//   initialState: {
//     items: [], // All products
//     trending: [], // Trending products
//     loading: false, // Loading state
//     error: null, // Error state
//   },
//   reducers: {
//     setTrendingProducts: (state, action) => {
//       state.trending = action.payload; // Set trending products
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.loading = true; // Set loading state
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload; // Store fetched products
//         // Filter trending products based on the boolean value
//         state.trending = action.payload.filter(product => product.trending); // Adjust the property name based on your product structure
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message; // Handle error
//       });
//   },
// });

// // Selectors to access the products
// export const { setTrendingProducts } = productSlice.actions;
//export const selectAllProducts = (state) => state.products.items; // Selector for all products
// export const selectTrendingProducts = (state) => state.products.trending; // Selector for trending products
// export const selectLoading = (state) => state.products.loading; // Selector for loading state
// export const selectError = (state) => state.products.error; // Selector for error

// export default productSlice.reducer;