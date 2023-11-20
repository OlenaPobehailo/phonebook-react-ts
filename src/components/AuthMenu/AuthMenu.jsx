import { NavLink } from 'react-router-dom';

const AuthMenu = () => {
  return (
    <ul>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </ul>
  );
};

export default AuthMenu;
