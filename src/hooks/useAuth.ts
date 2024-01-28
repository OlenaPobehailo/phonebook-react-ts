import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from "../redux/auth/authSelectors";
import { User } from "../types";

type AuthState = {
  isLoggedIn: boolean;
  isRefreshing: boolean;
  user: User;
};

export const useAuth = (): AuthState => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUser),
  };
};
