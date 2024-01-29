import { useTranslation } from "react-i18next";
import { CenterWrapper, PageWrapper } from "./Page.styled";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <CenterWrapper>
        <p>{t("home.welcomeTextGuest")}</p>
        <p>{t("home.authTextGuest")}</p>
      </CenterWrapper>
    </PageWrapper>
  );
};

export default HomePage;
