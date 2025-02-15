import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        fetchProductsStart(state) {
            state.loading = true;
        },
        fetchProductsSuccess(state, action) {
            state.loading = false;
            state.products = action.payload;
        },
        fetchProductsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productSlice.actions;

export default productSlice.reducer;

import reducer, { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from '../product-slice';

describe('productSlice', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            products: [],
            loading: false,
            error: null,
        });
    });

    it('should handle fetchProductsStart', () => {
        expect(reducer(undefined, fetchProductsStart())).toEqual({
            products: [],
            loading: true,
            error: null,
        });
    });

    it('should handle fetchProductsSuccess', () => {
        const previousState = { loading: true, products: [], error: null };
        expect(reducer(previousState, fetchProductsSuccess(['product1', 'product2']))).toEqual({
            loading: false,
            products: ['product1', 'product2'],
            error: null,
        });
    });

    it('should handle fetchProductsFailure', () => {
        const previousState = { loading: true, products: [], error: null };
        expect(reducer(previousState, fetchProductsFailure('Error fetching products'))).toEqual({
            loading: false,
            products: [],
            error: 'Error fetching products',
        });
    });
});