import React, { FC } from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "primary" | "link" | "text";
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  variant = "default",
  ...props
}) => {
  return (
    <StyledButton onClick={onClick} variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
