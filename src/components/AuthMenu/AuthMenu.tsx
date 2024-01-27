import { NavLink } from "react-router-dom";
import { StyledList } from "./AuthMenu.styled";

const AuthMenu: React.FC = () => {
  return (
    <StyledList>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </StyledList>
  );
};

export default AuthMenu;
