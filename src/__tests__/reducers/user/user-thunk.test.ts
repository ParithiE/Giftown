const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;
const rootReducer = require('../../../reducers');
const { fetchUserData } = require('../../../reducers/user/user-thunk');

const store = createStore(rootReducer, applyMiddleware(thunk));

test('fetchUserData should dispatch the correct actions', async () => {
    const expectedActions = [
        { type: 'FETCH_USER_REQUEST' },
        { type: 'FETCH_USER_SUCCESS', payload: { /* mock user data */ } }
    ];

    await store.dispatch(fetchUserData());

    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
});