import { RootState } from "../../store";
import { UserState } from "./user-slice";

export const userSelector = (state: RootState): UserState => state.;
export const userLoginSelector = (state: RootState): UserState => state.isLoggedIn;