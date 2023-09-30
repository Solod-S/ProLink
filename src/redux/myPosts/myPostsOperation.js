import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../service/API/MyPostAPI";
import { toast } from "react-toastify";

export const fetchMyPosts = createAsyncThunk("own-posts/", async (_, thunkAPI) => {
  try {
    const data = await api.fetchMyPosts();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteMyPost = createAsyncThunk("own-posts/remove/id", async (id, thunkAPI) => {
  try {
    await api.deleteMyPost(id);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateMyPost = createAsyncThunk("own-posts/update/id", async (body, thunkAPI) => {
  try {
    const data = await api.updateMyPost(body);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const createMyPost = createAsyncThunk("own-posts/add", async (body, thunkAPI) => {
  try {
    const data = await api.createMyPost(body);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
