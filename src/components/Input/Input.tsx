import React, { FC, InputHTMLAttributes } from "react";
import { StyledInput, InputWrapper, Label } from "./Input.styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <StyledInput {...props} />
      {error && <span className="error-message">{error}</span>}
    </InputWrapper>
  );
};

export default Input;
