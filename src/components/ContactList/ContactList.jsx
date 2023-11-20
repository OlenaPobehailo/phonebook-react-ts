import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/contactsSelectors';
import {
  deleteContact,
  fetchContacts,
} from '../../redux/contacts/contactsOperations';
import { DeleteButton, ListItem } from './ContactList.styled';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ListItem key={contact.id}>
          {contact.name + ': ' + contact.number}
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
