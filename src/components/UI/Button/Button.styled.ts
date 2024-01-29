import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;

  padding-top: 12px;
  padding-bottom: 12px;

  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
`;

export const LanguageButton = styled(StyledButton)`
  padding: 5px 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 9px;

  &:disabled {
    color: ${({ theme }) => theme.colors.text.secondary};
    background-color: ${({ theme }) => theme.colors.accentLight.primary};
  }

  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
