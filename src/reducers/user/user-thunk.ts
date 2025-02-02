// import { createAsyncThunk } from "@reduxjs/toolkit";
// import ApiService from "../../utils/ApiService";
// import { USER } from "../../constants/apiConstants";

// // Thunk for fetching user data
// export const fetchUserData = createAsyncThunk(
//     "user/fetchUserData",
//     async (userId: string, { rejectWithValue }) => {
//       try {
//         const response = await  ApiService.get(`${USER}/${userId}`);
//         return response.data;
//       } catch (error: any) {
//         return rejectWithValue(error.response?.data || "Failed to fetch user data");
//       }
//     }
// //   )