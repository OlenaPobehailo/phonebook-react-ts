import styled from 'styled-components';

export const DeleteButton = styled.button`
  height: 30px;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid grey;
  background-color: transparent;
  cursor: pointer;
  transition-property: all;
  transition-duration: 0.5s;

  font-size: 16px;

  &:hover,
  &:hover {
    background-color: red;
    color: #fff;
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  line-height: 1.8;
`;
