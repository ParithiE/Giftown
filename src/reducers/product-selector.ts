import { RootState } from "../store";
import { ProductsState } from "./product-slice";

// Selectors to access the products
export const selectAllProducts = (state: RootState): ProductsState => state.products; // Selector for all products
export const selectLoading = (state) => state.products.loading; // Selector for loading state
export const selectError = (state) => state.products.error; // Selector for error
