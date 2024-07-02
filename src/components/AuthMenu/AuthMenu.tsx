import { NavLink } from "react-router-dom";
import { t } from "i18next";
import { StyledList } from "./AuthMenu.styled";

const AuthMenu: React.FC = () => {
  return (
    <StyledList>
      <li>
        <NavLink to="/login">{t("header.login")}</NavLink>
      </li>
      <li>
        <NavLink to="/register">{t("header.register")}</NavLink>
      </li>
    </StyledList>
  );
};

export default AuthMenu;
