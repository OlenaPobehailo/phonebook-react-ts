import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 3.5rem 2.5rem;
  background-color: #fff;
  border-radius: 0.375rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

  font-size: 1.2rem;

  input {
    padding: 0.5rem;
    border-radius: 0.375rem;
    font-size: 1.25rem;
  }

  button {
    padding: 0.75rem 0.5rem;
    border-radius: 0.375rem;
    font-size: 1.25rem;
    cursor: pointer;
    transition-property: all;
    transition-duration: 0.5s;

    &:hover {
      background-color: #008080;
      color: #fff;
    }
  }
`;
