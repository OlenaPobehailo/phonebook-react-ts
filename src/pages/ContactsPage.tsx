import { useTranslation } from "react-i18next";
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import { PageWrapper } from "./Page.styled";

const ContactsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <ContactForm />
      <h2>{t("contactPage.contacts")}</h2>
      <Filter />
      <ContactList />
    </PageWrapper>
  );
};

export default ContactsPage;
