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

export const editContact = createAsyncThunk<
  Contact,
  { id: string; updatedContact: Omit<Contact, "id"> },
  { rejectValue: string }
>("contacts/editContact", async ({ id, updatedContact }, thunkAPI) => {
  try {
    const { data } = await goitApi.patch(`/contacts/${id}`, updatedContact);
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
