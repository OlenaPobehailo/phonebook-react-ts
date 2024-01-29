import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import { useTranslation } from "react-i18next";
import UserMenu from "../UserMenu";
import AuthMenu from "../AuthMenu";
import { StyledNav } from "./Navigation.styled";
// import { LOCALS } from "../../assets/i18n/constants";
// import i18n from "../../assets/i18n";
import LanguagesSwitcher from "../LanguagesSwitcher";

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
