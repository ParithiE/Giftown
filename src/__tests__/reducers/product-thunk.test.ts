const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;
const rootReducer = require('../../reducers'); // Adjust the path as necessary
const { fetchProducts } = require('../../reducers/product-thunk'); // Adjust the path as necessary

const store = createStore(rootReducer, applyMiddleware(thunk));

describe('Product Thunk', () => {
    it('fetchProducts should dispatch the correct actions', async () => {
        await store.dispatch(fetchProducts());
        const actions = store.getActions();
        expect(actions[0].type).toEqual('FETCH_PRODUCTS_REQUEST');
        expect(actions[1].type).toEqual('FETCH_PRODUCTS_SUCCESS');
    });
});