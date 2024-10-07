import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./reducers/product-slice.ts"; // Assuming this is where your slice is

// Create the store and pass in the reducer(s)
export const store = configureStore({
  reducer: {
    products: productsSlice, // Add other slices here if needed
  },
});

// Export RootState and AppDispatch types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;