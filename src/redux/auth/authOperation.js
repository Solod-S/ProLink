import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../service/API/AuthUserAPI";
import { toast } from "react-toastify";

export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
  try {
    const data = await api.postUser(credentials);

    toast.success(`Registration was successful, check your email`);
    return data;
  } catch (error) {
    if (error.response.status === 400) {
      toast.error(`${error.response?.data?.message}!`);
    }
    if (error.response.status === 409) {
      toast.error(`This email already in use`);
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const passwordRestore = createAsyncThunk("auth/password-reset", async (email, thunkAPI) => {
  try {
    const data = await api.restoreUser(email);
    toast.success(`Reset was successful, check your email`);
    return data;
  } catch (error) {
    if (error.response.status === 404) {
      toast.error(`${error.response?.data?.message ?? "Email wrong or invalid!"}!`);
    }
    if (error.response.status === 401) {
      toast.error(`${error.response?.data?.message ?? "User not verify"}!`);
    }

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logIn = createAsyncThunk("auth/signin", async (credentials, thunkAPI) => {
  try {
    const data = await api.logIn(credentials);

    return data;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error(`${error.response?.data?.message ?? "Email is not verified"}!`);
    }

    if (error.response.status === 404) {
      toast.error(`${error.response?.data?.message ?? "Email or password wrong or invalid!"}!`);
    }

    if (error.response.status === 400) {
      toast.error(`${error.response?.data?.message ?? "Failed to login, try again...."}!`);
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const googleLogIn = createAsyncThunk("auth/google-signin", async (credentials, thunkAPI) => {
  try {
    const data = await api.googleLogIn(credentials);

    return data;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error(`${error.response?.data?.message ?? "Email is not verified"}!`);
    }

    if (error.response.status === 404) {
      toast.error(`${error.response?.data?.message ?? "Email or password wrong or invalid!"}!`);
    }

    if (error.response.status === 400) {
      toast.error(`${error.response?.data?.message ?? "Failed to login, try again...."}!`);
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    await api.logOut();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken === null || !accessToken) {
    return thunkAPI.rejectWithValue();
  }
  try {
    const data = await api.fetchCurrentUser(accessToken);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
