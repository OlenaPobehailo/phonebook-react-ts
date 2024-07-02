import styled from "styled-components";

export const FormWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.accentDark.primary};
  padding: 10px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Input = styled.input`
  margin-bottom: 16px;
  width: 194px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.colors.accentDark.primary};
  border-radius: 4px;
`;

export const Button = styled.button`
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
