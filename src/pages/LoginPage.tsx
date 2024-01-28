import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useTranslation } from "react-i18next";

const Login: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="center">
      <p>{t("authForm.loginText_1")}</p>
      <LoginForm />
      <div>
        <p>
          {t("authForm.loginText_2")}
          <Link to="/register">{t("authForm.loginText_3")}</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
