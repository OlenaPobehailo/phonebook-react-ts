import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

export const goitApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setToken = token => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  goitApi.defaults.headers.common.Authorization = '';
};

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitApi.post('/users/signup', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      toast.error('Registration failed. Please try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitApi.post('/users/login', credentials);
      setToken(data.token);

      return data;
    } catch (error) {
      toast.error('User does not exist. Please try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await goitApi.post('/users/logout');
      clearToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;

    if (!savedToken) {
      return thunkAPI.rejectWithValue('Token is not exist');
    }

    try {
      setToken(savedToken);
      const { data } = await goitApi.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
