import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi } from "../auth/authOperations";
import { Contact } from "../../types";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await goitApi.get("contacts");
      return data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id: string, thunkAPI) => {
    try {
      await goitApi.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact: Contact, thunkAPI) => {
    try {
      const { data } = await goitApi.post("/contacts", newContact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async (
    { id, updatedContact }: { id: string; updatedContact: Contact },
    thunkAPI
  ) => {
    try {
      const { data } = await goitApi.put(`/contacts/${id}`, updatedContact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
