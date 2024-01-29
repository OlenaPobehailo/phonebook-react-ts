import styled from "styled-components";
import backgroundImage from "../../assets/images/background.jpg";

export const Wrapper = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;
