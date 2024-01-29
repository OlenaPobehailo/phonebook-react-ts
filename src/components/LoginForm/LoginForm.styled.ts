import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 3.5rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 0.375rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

  input {
    padding: 0.5rem;
    border-radius: 0.375rem;
  }

  button {
    padding: 0.75rem 0.5rem;
    border-radius: 0.375rem;
    border-color: ${({ theme }) => theme.colors.accentLight.primary};
    cursor: pointer;
    transition-property: all;
    transition-duration: 0.5s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.accentLight.primary};
      text-shadow: 0 0 1rem rgba(0, 0, 0, 0.8);
      color: ${({ theme }) => theme.colors.text.secondary};
    }
  }
`;
