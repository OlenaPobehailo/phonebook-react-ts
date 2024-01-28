import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import UserMenu from "../UserMenu";
import AuthMenu from "../AuthMenu";
import { StyledNav } from "./Navigation.styled";

const Navigation: React.FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <StyledNav>
      <ul>
        <li>{!isLoggedIn && <NavLink to="/">Home</NavLink>}</li>
        <li>{isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}</li>
      </ul>

      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </StyledNav>
  );
};

export default Navigation;
