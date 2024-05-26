import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { t } from "i18next";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginThunk } from "../../redux/auth/authOperations";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import { LoginFormInputs } from "../../types";
import { AppDispatch } from "../../redux/store";
import { StyledForm } from "./LoginForm.styled";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Email is not valid")
    .matches(/^[^@\s]+@[^@\s]{5,}\.[^@\s]+$/, "Email is not valid"),

  password: yup
    .string()
    .required("Password is required")
    .min(7, "Password must be at least 7 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/,
      "Password must be at least 7 characters long, contain at least one letter and one number, and must not contain special characters"
    ),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

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
        {...register("email")}
        autoComplete="username"
      />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        type="password"
        placeholder={t("authForm.password")}
        {...register("password")}
        autoComplete="current-password"
      />
      {errors.password && <span>{errors.password.message}</span>}

      <button type="submit">{t("authForm.login")}</button>
    </StyledForm>
  );
};

export default LoginForm;
