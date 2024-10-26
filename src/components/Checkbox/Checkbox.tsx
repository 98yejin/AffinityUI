// Checkbox.tsx
import React, { FC } from "react";
import {
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
} from "./Checkbox.styles";

interface CheckboxProps {
  label?: string;
  isChecked: boolean;
  onChange: () => void;
  indeterminate?: boolean;
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  isChecked,
  onChange,
  indeterminate = false,
}) => {
  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        ref={(input) => {
          if (input) input.indeterminate = indeterminate;
        }}
      />
      {label && <CheckboxLabel>{label}</CheckboxLabel>}
    </CheckboxContainer>
  );
};

export default Checkbox;
