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

  // console.log("i18n instance:", i18n);

  return (
    <StyledNav>
      <ul>
        <li>{!isLoggedIn && <NavLink to="/">{t("header.home")}</NavLink>}</li>
        <li>
          {isLoggedIn && (
            <NavLink to="/contacts">{t("header.contacts")}</NavLink>
          )}
        </li>
      </ul>

      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      {/* <div>
        <button
          disabled={i18n.language === LOCALS.EN}
          onClick={() => i18n.changeLanguage(LOCALS.EN)}
        >
          English
        </button>
        <button
          disabled={i18n.language === LOCALS.UK}
          onClick={() => i18n.changeLanguage(LOCALS.UK)}
        >
          Українська
        </button>
      </div> */}
        <LanguagesSwitcher />
    </StyledNav>
  );
};

export default Navigation;
