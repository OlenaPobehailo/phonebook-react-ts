import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 48px;

  padding: 10px 30px;
  background-color: ${({ theme }) => theme.colors.accentDark.primary};
  color: ${({ theme }) => theme.colors.text.secondary};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.9);

  @media only screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 8px 15px;
  }

  @media only screen and (max-width: 420px) {
    justify-content: space-between;
    padding: 8px;
  }

    & a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    font-size: 14px;
  }

  & a:hover {
    text-decoration: underline;
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.9);
  }
`;
