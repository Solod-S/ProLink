import { createSlice } from "@reduxjs/toolkit";
import * as authOperation from "../auth/authOperation";

const initialState = {
  user: {},
  isloggedIn: false,
  isRefreshing: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperation.register.fulfilled](state, action) {},
    [authOperation.passwordRestore.fulfilled](state, action) {},
    [authOperation.logIn.fulfilled](state, action) {
      const { payload } = action;
      state.user = payload.data.user;
      state.isloggedIn = true;
    },
    [authOperation.createNewPassword.fulfilled](state, action) {
      const { payload } = action;
      state.user = payload.data.user;
      state.isloggedIn = true;
    },
    [authOperation.googleLogIn.fulfilled](state, action) {
      const { payload } = action;
      state.user = payload.data.user;
      state.isloggedIn = true;
    },
    [authOperation.logOut.fulfilled](state, _) {
      state.user = {};
      state.isloggedIn = false;
    },
    [authOperation.fetchCurrentUser.fulfilled](state, action) {
      const { payload } = action;
      state.user = payload.data.user;
      state.isloggedIn = true;
    },
    [authOperation.googleLogIn.rejected](state, _) {
      state.user = {};
      state.isloggedIn = false;
    },
    [authOperation.createNewPassword.rejected](state, _) {
      state.user = {};
      state.isloggedIn = false;
    },
    [authOperation.logOut.rejected](state, _) {
      state.isloggedIn = false;
    },
    [authOperation.fetchCurrentUser.rejected](state, _) {
      state.user = {};
      state.isloggedIn = false;
    },
  },
});

export default AuthSlice.reducer;
export const { sessionRefresh } = AuthSlice.actions;
