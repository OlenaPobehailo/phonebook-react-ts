import { useState } from "react";
import { useDispatch } from "react-redux";
import { t } from "i18next";
import { AppDispatch } from "redux/store";
import { editContact } from "redux/contacts/contactsOperations";
import { Contact } from "types";
import { Button, FormWrapper, Input, Wrapper } from "./EditContactForm.styled";

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
    const updatedContact = { name, number };
    (dispatch as AppDispatch)(
      editContact({ id: contact.id, updatedContact }) as any
    );
    onClose();
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <Wrapper>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=""
          />
          <Input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder=""
          />
        </Wrapper>
        <Wrapper>
          <Button type="submit">{t("editForm.submit")}</Button>
          <Button type="button" onClick={onClose}>
            {t("editForm.close")}
          </Button>
        </Wrapper>
      </form>
    </FormWrapper>
  );
};

export default EditContactForm;
