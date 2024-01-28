import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import { useTranslation } from "react-i18next";

const RegisterPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="center">
      <p>{t("authForm.registerText_1")}</p>
      <RegisterForm />
      <p>
        {t("authForm.registerText_2")}
        <Link to="/login"> {t("authForm.registerText_3")}!</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
