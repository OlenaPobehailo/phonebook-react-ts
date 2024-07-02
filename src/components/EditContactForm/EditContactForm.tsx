import { useState } from "react";
import { useDispatch } from "react-redux";
import { t } from "i18next";
import { AppDispatch } from "../../redux/store";
import { editContact } from "../../redux/contacts/contactsOperations";
import { Contact } from "../../types";

interface EditContactFormProps {
  contact: Contact;
  onClose: () => void;
}

const EditContactForm: React.FC<EditContactFormProps> = ({
  contact,
  onClose,
}) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedContact = { name, number }; // Omit the id
    console.log('Updating contact:', updatedContact); // Log the data
    (dispatch as AppDispatch)(
      editContact({ id: contact.id, updatedContact }) as any
    );
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder=""
      />
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder=""
      />
      <button type="submit">submit</button>
      <button type="button" onClick={onClose}>
        close
      </button>
    </form>
  );
};

export default EditContactForm;
