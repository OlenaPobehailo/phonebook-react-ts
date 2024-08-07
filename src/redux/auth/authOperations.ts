import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { t } from "i18next";
import { RootState } from "../store";
import { LoginFormInputs, RegisterFormInputs } from "types";

export const goitApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

const setToken = (token: string) => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  goitApi.defaults.headers.common.Authorization = "";
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials: RegisterFormInputs, thunkAPI) => {
    try {
      const { data } = await goitApi.post("/users/signup", credentials);
      setToken(data.token);
      return data;
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.code === 11000
      ) {
        toast.error(t("errors.duplicateEmailError"));
        return thunkAPI.rejectWithValue(t("errors.duplicateEmailError"));
      }
      toast.error(t("errors.registerError"));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ credentials }: { credentials: LoginFormInputs }, thunkAPI) => {
    try {
      const { data } = await goitApi.post("/users/login", credentials);
      setToken(data.token);

      return data;
    } catch (error) {
      toast.error(t("errors.loginError"));
      return thunkAPI.rejectWithValue(error as string);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await goitApi.post("/users/logout");
      clearToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const savedToken = (thunkAPI.getState() as RootState).auth.token;

    if (!savedToken) {
      return thunkAPI.rejectWithValue("Token is not exist");
    }

    try {
      setToken(savedToken);
      const { data } = await goitApi.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
    }
  }
);
