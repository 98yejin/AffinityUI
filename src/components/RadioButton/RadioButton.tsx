import React, { FC } from "react";
import {
  RadioButtonContainer,
  RadioButtonInput,
  RadioButtonLabel,
} from "./RadioButton.styles";

interface RadioButtonProps {
  label?: string;
  isChecked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

const RadioButton: FC<RadioButtonProps> = ({
  label,
  isChecked,
  onChange,
  disabled = false,
}) => {
  return (
    <RadioButtonContainer>
      <RadioButtonInput
        type="radio"
        checked={isChecked}
        onChange={onChange}
        disabled={disabled}
      />
      {label && (
        <RadioButtonLabel disabled={disabled}>{label}</RadioButtonLabel>
      )}
    </RadioButtonContainer>
  );
};

export default RadioButton;
