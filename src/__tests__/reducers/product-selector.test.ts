import { productSelectorReducer } from '../product-selector';
import { initialState } from '../initialState';

describe('productSelectorReducer', () => {
    test('should return the initial state', () => {
        expect(productSelectorReducer(undefined, {})).toEqual(initialState);
    });

    test('should handle ADD_PRODUCT', () => {
        const action = { type: 'ADD_PRODUCT', payload: { id: 1, name: 'Product 1' } };
        const expectedState = { ...initialState, products: [{ id: 1, name: 'Product 1' }] };
        expect(productSelectorReducer(initialState, action)).toEqual(expectedState);
    });

    test('should handle REMOVE_PRODUCT', () => {
        const action = { type: 'REMOVE_PRODUCT', payload: { id: 1 } };
        const stateWithProduct = { ...initialState, products: [{ id: 1, name: 'Product 1' }] };
        const expectedState = initialState;
        expect(productSelectorReducer(stateWithProduct, action)).toEqual(expectedState);
    });
});