import React, { FC } from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  ...props
}) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
