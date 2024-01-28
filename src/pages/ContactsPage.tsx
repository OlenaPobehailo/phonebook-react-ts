import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";

const ContactsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <ContactForm />
      <h2>{t("contactPage.contacts")}</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
