import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginData } from "../../constants/dummyLogin";
import { LoginDataType } from "../../constants/dummyLogin";

interface LoginState {
  hasAccess: boolean;
  isLoggedIn: boolean;
  matchedUser: LoginDataType | null;
  error: boolean;
}

const initialState: LoginState = {
  hasAccess: false,
  isLoggedIn: false,
  matchedUser: null,
  error: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    checkLoginCode(state, action: PayloadAction<number>) {
      const user = loginData.find((u) => u.code === action.payload) || null;
      state.hasAccess = !!user;
      state.matchedUser = user;
      state.error = !user;
    },
    resetAccess(state) {
      state.hasAccess = false;
      state.matchedUser = null;
      state.error = false;
      state.isLoggedIn = false;
    },
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { checkLoginCode, resetAccess, setIsLoggedIn } =
  loginSlice.actions;
export default loginSlice.reducer;
