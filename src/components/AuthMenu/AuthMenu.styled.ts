import styled from "styled-components";

export const StyledList = styled.ul`
 display: flex;
    gap: 10px;
  @media only screen and (max-width: 420px) {
    flex-direction: column;
    gap: 5px;
  }
`;
