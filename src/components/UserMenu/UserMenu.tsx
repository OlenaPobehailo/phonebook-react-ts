import { useDispatch, useSelector } from "react-redux";
import { t } from "i18next";
import { selectUser } from "redux/auth/authSelectors";
import { logoutThunk } from "redux/auth/authOperations";
import { AppDispatch } from "redux/store";
import { StyledUserMenu } from "./UserMenu.styled";

const UserMenu: React.FC = () => {
  const dispatch = useDispatch();

  const { name } = useSelector(selectUser);

  return (
    <StyledUserMenu>
      <span> {name}</span>
      <button onClick={() => (dispatch as AppDispatch)(logoutThunk())}>
        {t("header.logout")}
      </button>
    </StyledUserMenu>
  );
};

export default UserMenu;
