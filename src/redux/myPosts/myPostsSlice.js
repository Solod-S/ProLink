import { createSlice } from "@reduxjs/toolkit";
import * as myPostsOperation from "../myPosts/myPostsOperation";

const initialState = { data: [], isRefreshing: false };

const myPostsSlice = createSlice({
  name: "myPosts",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(myPostsOperation.fetchMyPosts.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(myPostsOperation.fetchMyPosts.fulfilled, (state, { payload }) => {
        state.data = payload.data.posts;
        state.isRefreshing = false;
      })
      .addCase(myPostsOperation.deleteMyPost.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(myPostsOperation.deleteMyPost.fulfilled, (state, { payload }) => {
        state.data = state.data.filter((p) => p._id !== payload);
        state.isRefreshing = false;
      })
      .addCase(myPostsOperation.createMyPost.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(myPostsOperation.createMyPost.fulfilled, (state, { payload }) => {
        state.data = [...state.data, payload.data.post];
        state.isRefreshing = false;
      })
      .addCase(myPostsOperation.updateMyPost.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(myPostsOperation.updateMyPost.fulfilled, (state, { payload }) => {
        state.data = state.data.map((p) => (p._id === payload.data.post._id ? payload.data.post : p));
        state.isRefreshing = false;
      })
      .addDefaultCase((state) => {
        state.isRefreshing = false;
      }),
});

export default myPostsSlice.reducer;
