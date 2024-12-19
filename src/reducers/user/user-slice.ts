import { PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: string,
    name: string,
    phoneNumber: string
    token?: string
}

export interface UserState {
    user: User|null,
    isLoggedIn: boolean
}

export const intialState: UserState = {
  user: null,
  isLoggedIn: false
};

const userSlice = {
    name: "user",
    intialState,
    reducers: {
        setUser(state, action: PayloadAction<User>){
            state.user = action.payload,
            state.loggedIn = true
        },

         // Clear user details (e.g., on logout)
        clearUser(state) {
        state.user = null;
        state.isLoggedIn = false;
      },
    }
}

// Export actions
export const { setUser, clearUser } = userSlice.actions;

// Export reducer
export default userSlice.reducer;