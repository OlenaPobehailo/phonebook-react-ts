import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { t } from "i18next";
import EditContactForm from "components/EditContactForm";
import {
  deleteContact,
  fetchContacts,
} from "redux/contacts/contactsOperations";
import { selectFilteredContacts } from "redux/contacts/contactsSelectors";
import { AppDispatch } from "redux/store";
import { Contact } from "types";
import {
  ButtonWrapper,
  DeleteButton,
  EditButton,
  ListItem,
  SortButton,
} from "./ContactList.styled";

const ContactList: React.FC = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
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

  const handleSortOrderChange = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
  };

  const sortedContacts = [...filteredContacts].sort((a, b) =>
    sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  return (
    <>
      {editingContact && (
        <EditContactForm
          contact={editingContact}
          onClose={handleCloseEditForm}
        />
      )}

      {filteredContacts.length === 0 ? (
        <p>{t("contactPage.emptyList")}</p>
      ) : (
        <>
          <SortButton onClick={handleSortOrderChange}>
            {sortOrder === "asc" ? (
              <>{t("contactPage.sortAsc")} &uarr;</>
            ) : (
              <>{t("contactPage.sortDesc")} &darr;</>
            )}
          </SortButton>

          <ul>
            {sortedContacts.map((contact: Contact) => (
              <ListItem key={contact.id}>
                {contact.name + ": " + contact.number}
                <ButtonWrapper>
                  <EditButton
                    type="button"
                    onClick={() => handleEditContact(contact)}
                  >
                    {t("contactPage.edit")}
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
      )}
    </>
  );
};

export default ContactList;
