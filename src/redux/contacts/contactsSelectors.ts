import { createSelector } from "reselect";
import { RootState } from "../store";

export const selectContacts = (state: RootState) => state.contacts.contacts;
export const selectFilter = (state: RootState) => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  }
);
