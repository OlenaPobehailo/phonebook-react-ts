import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerThunk } from "../../redux/auth/authOperations";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import { StyledForm } from "./RegisterForm.styled";
import { RegisterFormInputs } from "../../types";
import { AppDispatch } from "../../redux/store";

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<RegisterFormInputs>();
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
        placeholder="Enter your name"
        {...register("name", { required: true, minLength: 3 })}
        autoComplete="username"
      />
      <input
        placeholder="Enter your email"
        {...register("email", { required: true, minLength: 6 })}
        autoComplete="username"
      />
      <input
        type="password"
        placeholder="Enter your password"
        {...register("password", { required: true, minLength: 6 })}
        autoComplete="current-password"
      />
      <button type="submit">Register</button>
    </StyledForm>
  );
};

export default RegisterForm;
