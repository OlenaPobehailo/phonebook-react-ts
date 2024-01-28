import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginThunk } from "../../redux/auth/authOperations";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import { StyledForm } from "./LoginForm.styled";
import { LoginFormInputs } from "../../types";
import { AppDispatch } from "../../redux/store";
import { t } from "i18next";

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { register, handleSubmit, reset } = useForm<LoginFormInputs>();

  const submit: SubmitHandler<LoginFormInputs> = (data) => {
    (dispatch as AppDispatch)(loginThunk({ credentials: data }));
    reset();
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <input
        placeholder={t("authForm.email")}
        {...register("email", { required: true, minLength: 6 })}
        autoComplete="username"
      />
      <input
        type="password"
        placeholder={t("authForm.password")}
        {...register("password", { required: true, minLength: 6 })}
        autoComplete="current-password"
      />
      <button type="submit">{t("authForm.login")}</button>
    </StyledForm>
  );
};

export default LoginForm;
