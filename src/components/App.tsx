import { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { PrivateRoute, RestrictedRoute } from "routes";
import { NotFound } from "pages";
import { refreshThunk } from "redux/auth/authOperations";
import { selectIsLoggedIn } from "redux/auth/authSelectors";
import { AppDispatch } from "redux/store";
import { useAuth } from "hooks/useAuth";
import Layout from "./Layout";
import Loader from "./Loader";

const HomePage = lazy(() => import("pages/HomePage"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const ContactsPage = lazy(() => import("pages/ContactsPage"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    (dispatch as AppDispatch)(refreshThunk());
  }, [dispatch]);

  return (
    <div>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            {!isLoggedIn ? (
              <Route index element={<HomePage />} />
            ) : (
              <Route index element={<Navigate to="/contacts" />} />
            )}

            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={RegisterPage}
                  redirectTo="/contacts"
                />
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </div>
  );
};
