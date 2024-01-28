import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;

  border: none;
  border-radius: 12px;

  background-color: rgb(240, 240, 240);

  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
`;

export const LanguageButton = styled(StyledButton)`
  padding: 0;
  
  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-right: 20px;
  }
`;
