import { StyledButton } from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton type="button" {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
