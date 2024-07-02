import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const DeleteButton = styled.button`
  height: 30px;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.accentDark.primary};
  background-color: transparent;
  cursor: pointer;
  transition-property: all;
  transition-duration: 0.5s;

  font-size: 16px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accentLight.secondary};
    color: ${({ theme }) => theme.colors.background.primary};
    border: 1px solid ${({ theme }) => theme.colors.accentLight.secondary};
    box-shadow: 0.1rem 0 0.5 rgba(0, 0, 0, 0.5);
  }
`;

export const EditButton = styled.button`
  height: 30px;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.accentDark.primary};
  background-color: transparent;
  cursor: pointer;
  transition-property: all;
  transition-duration: 0.5s;

  font-size: 16px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accentLight.secondary};
    color: ${({ theme }) => theme.colors.background.primary};
    border: 1px solid ${({ theme }) => theme.colors.accentLight.secondary};
    box-shadow: 0.1rem 0 0.5 rgba(0, 0, 0, 0.5);
  }
`;

export const SortButton = styled.button`
  height: 30px;
  padding: 0 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.accentLight.primary};
  color: white;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.accentDark.primary};

`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  line-height: 1.8;
`;
