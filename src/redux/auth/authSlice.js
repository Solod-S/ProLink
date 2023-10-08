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
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(authOperation.register.fulfilled, (state, _) => {
        state.user = {};
        state.isloggedIn = false;
      })
      .addCase(authOperation.register.rejected, (state, _) => {
        state.user = {};
        state.isloggedIn = false;
      })
      .addCase(authOperation.passwordRestore.fulfilled, (state, _) => {
        state.user = {};
        state.isloggedIn = false;
      })
      .addCase(authOperation.passwordRestore.rejected, (state, _) => {
        state.user = {};
        state.isloggedIn = false;
      })
      .addCase(authOperation.logIn.fulfilled, (state, action) => {
        const { payload } = action;
        state.user = payload.data.user;
        state.isloggedIn = true;
      })
      .addCase(authOperation.logIn.rejected, (state, _) => {
        state.user = {};
        state.isloggedIn = false;
      })
      .addCase(authOperation.createNewPassword.fulfilled, (state, action) => {
        const { payload } = action;
        state.user = payload.data.user;
        state.isloggedIn = true;
      })
      .addCase(authOperation.createNewPassword.rejected, (state, _) => {
        state.user = {};
        state.isloggedIn = false;
      })
      .addCase(authOperation.googleLogIn.fulfilled, (state, action) => {
        const { payload } = action;
        state.user = payload.data.user;
        state.isloggedIn = true;
      })
      .addCase(authOperation.googleLogIn.rejected, (state, _) => {
        state.user = {};
        state.isloggedIn = false;
      })
      .addCase(authOperation.logOut.fulfilled, (state, _) => {
        state.user = {};
        state.isloggedIn = false;
      })
      .addCase(authOperation.logOut.rejected, (state, _) => {
        state.isloggedIn = false;
      })
      .addCase(authOperation.fetchCurrentUser.fulfilled, (state, action) => {
        const { payload } = action;
        state.user = payload.data.user;
        state.isloggedIn = true;
      })
      .addCase(authOperation.fetchCurrentUser.rejected, (state, _) => {
        state.user = {};
        state.isloggedIn = false;
      })
      .addDefaultCase((state) => {
        state.isRefreshing = false;
      });
  },
});

export default AuthSlice.reducer;
export const { sessionRefresh } = AuthSlice.actions;
