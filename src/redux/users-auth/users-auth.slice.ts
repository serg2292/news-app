import { IUser } from "../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsersAuthSlice } from "../../types/types";

const usersAuthSlice = createSlice({
  name: "usersAuth",
  initialState: {
    users: [
      {
        login: "admin",
        password: "admin123",
      },
    ],
    authLogin: null,
  } as IUsersAuthSlice,
  reducers: {
    setAuth(state, action: PayloadAction<IUser>) {
      state.authLogin = action.payload.login;
    },
    exitAuth(state) {
      state.authLogin = null;
    },
  },
});

export default usersAuthSlice.reducer;
export const { setAuth, exitAuth } = usersAuthSlice.actions;
