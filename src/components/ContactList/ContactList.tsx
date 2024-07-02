import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/contactsSelectors";
import {
  deleteContact,
  fetchContacts,
} from "../../redux/contacts/contactsOperations";
import {
  ButtonWrapper,
  DeleteButton,
  EditButton,
  ListItem,
} from "./ContactList.styled";
import { Contact } from "../../types";
import { AppDispatch } from "../../redux/store";
import { t } from "i18next";
import EditContactForm from "../EditContactForm";

const ContactList: React.FC = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    (dispatch as AppDispatch)(fetchContacts() as any);
  }, [dispatch]);

  const handleDeleteContact = (id: string): void => {
    (dispatch as AppDispatch)(deleteContact(id) as any);
  };

  const handleEditContact = (contact: Contact): void => {
    setEditingContact(contact);
  };

  const handleCloseEditForm = (): void => {
    setEditingContact(null);
  };

  return (
    <>
      {editingContact && (
        <EditContactForm
          contact={editingContact}
          onClose={handleCloseEditForm}
        />
      )}
      <ul>
        {filteredContacts.map((contact: Contact) => (
          <ListItem key={contact.id}>
            {contact.name + ": " + contact.number}
            <ButtonWrapper>
              <EditButton
                type="button"
                onClick={() => handleEditContact(contact)}
              >
                Edit
              </EditButton>
              <DeleteButton
                type="button"
                name="delete"
                onClick={() => handleDeleteContact(contact.id)}
              >
                {t("contactPage.delete")}
              </DeleteButton>
            </ButtonWrapper>
          </ListItem>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
