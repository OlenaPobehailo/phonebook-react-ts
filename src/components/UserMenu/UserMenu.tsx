import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import { logoutThunk } from "../../redux/auth/authOperations";
import { StyledUserMenu } from "./UserMenu.styled";
import { AppDispatch } from "../../redux/store";

const UserMenu: React.FC = () => {
  const dispatch = useDispatch();

  const { name } = useSelector(selectUser);

  return (
    <StyledUserMenu>
      <span> {name}</span>
      <span>|</span>
      <button onClick={() => (dispatch as AppDispatch)(logoutThunk())}>
        Logout
      </button>
    </StyledUserMenu>
  );
};

export default UserMenu;
