// RadioButtonGroup.tsx
import React, { FC } from "react";
import RadioButton from "./RadioButton";

interface RadioButtonGroupProps {
  options: { label: string; value: string; disabled?: boolean }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioButtonGroup: FC<RadioButtonGroupProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <div>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          isChecked={selectedValue === option.value}
          onChange={() => onChange(option.value)}
          disabled={option.disabled}
        />
      ))}
    </div>
  );
};

export default RadioButtonGroup;
