import i18n from "assets/i18n";
import { t } from "i18next";
import { LOCALS } from "assets/i18n/constants";
import { LanguageButton } from "../UI/Button/Button.styled";
import { StyledSwitcher } from "./LanguagesSwitcher.styled";

const LanguagesSwitcher = () => {
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <StyledSwitcher>
      <LanguageButton
        disabled={i18n.language === LOCALS.EN}
        onClick={() => i18n.changeLanguage(LOCALS.EN)}
      >
        {i18n.language === LOCALS.EN ? t("English") : t("Change to English")}
      </LanguageButton>
      <LanguageButton
        disabled={i18n.language === LOCALS.UK}
        onClick={() => changeLanguage(LOCALS.UK)}
      >
        {i18n.language === LOCALS.UK
          ? t("Українська")
          : t("Змінити на українську")}
      </LanguageButton>
    </StyledSwitcher>
  );
};

export default LanguagesSwitcher;
