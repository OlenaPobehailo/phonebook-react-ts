import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { t } from "i18next";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerThunk } from "redux/auth/authOperations";
import { selectIsLoggedIn } from "redux/auth/authSelectors";
import { AppDispatch } from "redux/store";
import { RegisterFormInputs } from "types";
import { StyledForm } from "./RegisterForm.styled";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Email is not valid")
    .matches(/^[^@\s]+@[^@\s]{5,}\.[^@\s]+$/, "Email is not valid"),

  password: yup
    .string()
    .required("Password is required")
    .min(7, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/,
      "Password must be at least 7 characters long, contain at least one letter and one number, and must not contain special characters"
    ),
});

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(schema),
  });
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const submit: SubmitHandler<RegisterFormInputs> = (data) => {
    (dispatch as AppDispatch)(registerThunk(data));
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <input
        placeholder={t("authForm.name")}
        {...register("name")}
        autoComplete="username"
      />
      {errors.name && <p>{errors.name.message}</p>}

      <input
        placeholder={t("authForm.email")}
        {...register("email")}
        autoComplete="email"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        type="password"
        placeholder={t("authForm.password")}
        {...register("password")}
        autoComplete="current-password"
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">{t("authForm.register")}</button>
    </StyledForm>
  );
};

export default RegisterForm;
