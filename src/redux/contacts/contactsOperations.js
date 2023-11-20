import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitApi } from '../auth/authOperations';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await goitApi.get('contacts');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await goitApi.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const { data } = await goitApi.post('/contacts', newContact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
