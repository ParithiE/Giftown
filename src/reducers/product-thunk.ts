import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductResponse } from "../types/Product.ts";
import  ApiService from "../utils/ApiService.ts"
import { PRODUCTS } from "../constants/apiConstants.ts";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const {data, headers} = await ApiService.get(`${PRODUCTS}?page=${0}&size=${30}`);
        return {
            items: data, // products from the body
            pagesCount: headers['page-total-count'],  // custom header for total pages
            totalElements: headers['page-total-elements'],  // custom header for total elements
          };
    }
);

// export const fetchProductSizes = createAsyncThunk(
//     "products/fetchProductSizes",
//     async ({ productId, subCategoryId }) => {
//         const response = await ApiService.get(
//             `/products/${productId}/${subCategoryId}/sizes`
//         );
//         return response.data; // Assuming this returns the list of sizes
//     }
// );