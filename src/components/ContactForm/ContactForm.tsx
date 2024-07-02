import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { t } from "i18next";
import { addContact } from "redux/contacts/contactsOperations";
import { selectContacts } from "redux/contacts/contactsSelectors";
import { Contact } from "types";
import { AppDispatch } from "redux/store";
import { Input, Button } from "./ContactForm.styled";

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
      (dispatch as AppDispatch)(addContact(newContact) as any);
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
        {t("contactForm.name")}
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />
      </label>

      <label>
        {t("contactForm.number")}

        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          required
        />
      </label>

      <Button type="submit">{t("contactForm.add")}</Button>
    </form>
  );
};

export default ContactForm;
