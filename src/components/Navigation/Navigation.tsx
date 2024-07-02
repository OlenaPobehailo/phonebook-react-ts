import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import AuthMenu from "components/AuthMenu";
import UserMenu from "components/UserMenu";
import LanguagesSwitcher from "components/LanguagesSwitcher";
import { selectIsLoggedIn } from "redux/auth/authSelectors";
import { StyledNav } from "./Navigation.styled";

const Navigation: React.FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { t } = useTranslation();

  return (
    <StyledNav>
      {!isLoggedIn && <NavLink to="/">{t("header.home")}</NavLink>}

      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      <LanguagesSwitcher />
    </StyledNav>
  );
};

export default Navigation;
