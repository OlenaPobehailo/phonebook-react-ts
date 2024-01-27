import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addContact } from "../../redux/contacts/contactsOperations";
import { selectContacts } from "../../redux/contacts/contactsSelectors";
import { Input, Button } from "./ContactForm.styled";
import { Contact } from "../../types";
import { nanoid } from "@reduxjs/toolkit";

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const isNameExist: boolean = contacts.some(
      (contact: Contact) => contact.name === name
    );

    if (isNameExist) {
      toast.error(`${name} is already in contacts`);
      reset();
      return;
    } else {
      const newContact: Contact = {
        id: nanoid(),
        name,
        number,
      };
      dispatch(addContact(newContact) as any);
      reset();
    }
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />
      </label>

      <label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          required
        />
      </label>

      <Button type="submit">Add contact</Button>
    </form>
  );
};

export default ContactForm;
