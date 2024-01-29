import styled from "styled-components";

export const StyledUserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 420px) {
    flex-direction: column;
  }

  button {
    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.accentLight.primary};
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition-property: all;
    transition-duration: 0.5s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.accentLight.secondary};
      color: ${({ theme }) => theme.colors.text.secondary};
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.8);
    }
  }
`;
