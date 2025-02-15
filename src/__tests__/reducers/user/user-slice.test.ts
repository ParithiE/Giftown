import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } = userSlice.actions;

export default userSlice.reducer;

import reducer, { loginRequest, loginSuccess, loginFailure, logout } from '../user-slice';

describe('userSlice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      user: null,
      loading: false,
      error: null,
    });
  });

  it('should handle loginRequest', () => {
    expect(reducer(undefined, loginRequest())).toEqual({
      user: null,
      loading: true,
      error: null,
    });
  });

  it('should handle loginSuccess', () => {
    const user = { name: 'John Doe' };
    expect(reducer(undefined, loginSuccess(user))).toEqual({
      user,
      loading: false,
      error: null,
    });
  });

  it('should handle loginFailure', () => {
    const error = 'Login failed';
    expect(reducer(undefined, loginFailure(error))).toEqual({
      user: null,
      loading: false,
      error,
    });
  });

  it('should handle logout', () => {
    const initialState = {
      user: { name: 'John Doe' },
      loading: false,
      error: null,
    };
    expect(reducer(initialState, logout())).toEqual({
      user: null,
      loading: false,
      error: null,
    });
  });
});