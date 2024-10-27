import React, { FC } from "react";
import { ToggleContainer, ToggleInput, Slider } from "./ToggleSwitch.styles";

interface ToggleSwitchProps {
  isChecked: boolean;
  onChange: () => void;
  size?: "small" | "medium" | "large";
  onColor?: string;
  offColor?: string;
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({
  isChecked,
  onChange,
  onColor,
  offColor,
  size = "medium",
}) => {
  return (
    <ToggleContainer size={size}>
      <ToggleInput type="checkbox" checked={isChecked} onChange={onChange} />
      <Slider
        size={size}
        onColor={onColor}
        offColor={offColor}
        isChecked={isChecked}
      />
    </ToggleContainer>
  );
};

export default ToggleSwitch;
