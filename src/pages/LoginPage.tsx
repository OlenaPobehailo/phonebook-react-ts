import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LoginForm from "components/LoginForm";
import { PageWrapper } from "./Page.styled";

const Login: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <p>{t("authForm.loginText_1")}</p>
      <LoginForm />
      <div>
        <p>
          {t("authForm.loginText_2")}
          <Link to="/register">{t("authForm.loginText_3")}</Link>
        </p>
      </div>
    </PageWrapper>
  );
};

export default Login;
