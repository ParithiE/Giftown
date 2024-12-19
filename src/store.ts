import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./reducers/product-slice.ts"; // Assuming this is where your slice is
import { loadState, saveState } from "./utils/localStorage.ts";
import { reducer as formReducer } from "redux-form";


// Load the persisted state from localStorage
const persistedState = loadState();

// Create the store and pass in the reducer(s)
export const store = configureStore({
  reducer: {
    products: productsSlice, 
    form: formReducer,  
    // Add other slices here if needed
 },
 preloadedState: persistedState, 
});

// Subscribe to store changes and save the state to localStorage
store.subscribe(() => {
  saveState({
    products: store.getState().products, // Persist only the 'products' slice of state (adjust as needed)
  });
});



// Export RootState and AppDispatch types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
