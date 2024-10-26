import React, { FC, useState } from "react";
import {
  StyledInput,
  InputWrapper,
  ToggleButton,
  PasswordIcon,
} from "./PasswordInput.styles";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface PasswordInputProps {
  placeholder?: string;
}

const PasswordInput: FC<PasswordInputProps> = ({ placeholder }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <InputWrapper>
      <StyledInput
        type={visible ? "text" : "password"}
        placeholder={placeholder}
      />
      <ToggleButton
        onClick={toggleVisibility}
        aria-label="Toggle password visibility"
      >
        <PasswordIcon>{visible ? <FiEyeOff /> : <FiEye />}</PasswordIcon>
      </ToggleButton>
    </InputWrapper>
  );
};

export default PasswordInput;
