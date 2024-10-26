// CheckboxGroup.tsx
import React, { FC, useState } from "react";
import Checkbox from "./Checkbox";

interface CheckboxGroupProps {
  options: { label: string; value: string }[];
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  options,
  selectedValues,
  onChange,
}) => {
  const handleCheckboxChange = (value: string) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    onChange(newSelectedValues);
  };

  return (
    <div>
      {options.map((option) => (
        <Checkbox
          key={option.value}
          label={option.label}
          isChecked={selectedValues.includes(option.value)}
          onChange={() => handleCheckboxChange(option.value)}
        />
      ))}
    </div>
  );
};

export default CheckboxGroup;
