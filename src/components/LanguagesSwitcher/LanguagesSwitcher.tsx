import React from "react";
import { StyledSwitcher } from "./LanguagesSwitcher.styled";
import i18n from "../../assets/i18n";
import { LOCALS } from "../../assets/i18n/constants";
import { LanguageButton } from "../UI/Button/Button.styled";

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
        English
      </LanguageButton>
      <LanguageButton
          disabled={i18n.language === LOCALS.UK}
          onClick={() => changeLanguage(LOCALS.UK)}
      >
        Українська
      </LanguageButton>
    </StyledSwitcher>
  );
};

export default LanguagesSwitcher;
