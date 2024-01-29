import styled from "styled-components";

export const Button = styled.button`
  margin-bottom: 28px;
  width: 200px;
  height: 38px;
  border: 1px solid ${({ theme }) => theme.colors.accentDark.primary};
  background-color: ${({ theme }) => theme.colors.accentLight.primary};
  border-radius: 4px;
  font-size: 16px;

  &:hover,
  &:hover {
    background-color: ${({ theme }) => theme.colors.accentDark.primary};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const Input = styled.input`
  display: block;
  margin-bottom: 16px;
  width: 194px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.colors.accentDark.primary};
  border-radius: 4px;
`;
