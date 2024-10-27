import React, { FC } from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "default" | "primary" | "link" | "text";
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = "default",
  ...props
}) => {
  return (
    <StyledButton onClick={onClick} type={type} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
