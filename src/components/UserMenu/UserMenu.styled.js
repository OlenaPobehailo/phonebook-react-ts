import styled from 'styled-components';

export const StyledUserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  button {
    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem;
    border: 1px solid #008080;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition-property: all;
    transition-duration: 0.5s;

    &:hover {
      background-color: #008080;
      color: #fff;
    }
  }
`;
