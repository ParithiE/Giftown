import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { fetchUserData } from "./user-thunk";

interface User {
    id: string,
    name: string,
    phoneNumber: string
    token?: string
}

export interface UserState {
    user: User | null,
    isLoggedIn: boolean
}

export const intialState: UserState = {
    user: null,
    isLoggedIn: false
};

const userSlice = createSlice({
    name: "user",
    intialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.loggedIn = true;

            // Save to localStorage
            localStorage.setItem("user", JSON.stringify(action.payload));
        },

        // Clear user details (e.g., on logout)
        clearUser(state) {
            state.user = null;
            state.isLoggedIn = false;
            // Remove from localStorage
            localStorage.removeItem("user");
        },
    }
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchUserData.pending, (state) => {
    //             state.loading = true;
    //             state.error = null;
    //         })
    //         .addCase(fetchUserData.fulfilled, (state, action: PayloadAction<User>) => {
    //             state.user = action.payload;
    //             state.isLoggedIn = true;
    //             state.loading = false;

    //             // Save to localStorage
    //             localStorage.setItem("user", JSON.stringify(action.payload));
    //         })
    //         .addCase(fetchUserData.rejected, (state, action: PayloadAction<any>) => {
    //             state.loading = false;
    //             state.error = action.payload;
    //         });
    // },
})

// Export actions
export const { setUser, clearUser } = userSlice.actions;

// Export reducer
export default userSlice.reducer;