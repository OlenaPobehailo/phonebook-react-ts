import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RegisterForm from "components/RegisterForm";
import { PageWrapper } from "./Page.styled";

const RegisterPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <p>{t("authForm.registerText_1")}</p>
      <RegisterForm />
      <p>
        {t("authForm.registerText_2")}
        <Link to="/login"> {t("authForm.registerText_3")}!</Link>
      </p>
    </PageWrapper>
  );
};

export default RegisterPage;
