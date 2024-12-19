import { RootState } from "../../store";
import { UserState } from "./user-slice";

export const userSelector = (state: RootState): UserState => state.user;
export const userLoginSelector = (state: RootState): UserState => state.isLoggedIn;