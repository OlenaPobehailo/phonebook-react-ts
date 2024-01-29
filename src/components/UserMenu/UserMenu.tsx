import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import { logoutThunk } from "../../redux/auth/authOperations";
import { StyledUserMenu } from "./UserMenu.styled";
import { AppDispatch } from "../../redux/store";
import { t } from "i18next";

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
