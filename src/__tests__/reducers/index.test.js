const { combineReducers } = require('redux');
const rootReducer = combineReducers({
	// add your reducers here
});

test('root reducer combines reducers correctly', () => {
	const initialState = {};
	const action = { type: 'TEST_ACTION' };
	const nextState = rootReducer(initialState, action);
	expect(nextState).toEqual(initialState); // Adjust based on your reducers' initial state
});