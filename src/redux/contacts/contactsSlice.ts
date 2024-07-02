import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from "./contactsOperations";
import { Contact, ContactsState } from "../../types";

const initialState: ContactsState = {
  contacts: [],
  loading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.contacts = payload.sort((a: Contact, b: Contact) =>
          a.name.localeCompare(b.name)
        );
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== payload
        );
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.unshift(payload);
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(
          (contact) => contact.id === action.payload.id
        );
        if (index !== -1) {
          state.contacts[index] = action.payload;
        }
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContact.pending,
          addContact.pending,
          editContact.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContact.rejected,
          addContact.rejected,
          editContact.rejected
        ),
        (state, { payload }) => {
          state.loading = false;
          state.error = typeof payload === "string" ? payload : null;
        }
      );
  },
});

export default contactsSlice.reducer;
