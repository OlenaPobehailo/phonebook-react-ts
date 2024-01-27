import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/contactsSelectors";
import {
  deleteContact,
  fetchContacts,
} from "../../redux/contacts/contactsOperations";
import { DeleteButton, ListItem } from "./ContactList.styled";
import { Contact } from "../../types";

const ContactList: React.FC = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts() as any);
  }, [dispatch]);

  const handleDeleteContact = (id: string): void => {
    dispatch(deleteContact(id) as any);
  };

  return (
    <ul>
      {filteredContacts.map((contact: Contact) => (
        <ListItem key={contact.id}>
          {contact.name + ": " + contact.number}
          <DeleteButton
            type="button"
            name="delete"
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </ul>
  );
};

export default ContactList;
