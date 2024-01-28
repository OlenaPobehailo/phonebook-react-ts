import { useTranslation } from "react-i18next";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="center">
      <p>{t("home.welcomeTextGuest")}</p>
      <p>{t("home.authTextGuest")}</p>
    </div>
  );
};

export default HomePage;
