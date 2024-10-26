import React, { FC } from "react";
import {
  Progress,
  ProgressBarContainer,
  ProgressLabel,
} from "./ProgressBar.sytles";

interface ProgressBarProps {
  value: number; // Progress value from 0 to 100
  label?: string;
  color?: "primary" | "success" | "warning" | "danger";
}

const ProgressBar: FC<ProgressBarProps> = ({
  value,
  label,
  color = "primary",
}) => {
  return (
    <ProgressBarContainer>
      <Progress value={value} color={color} />
      {label && <ProgressLabel>{label}</ProgressLabel>}
    </ProgressBarContainer>
  );
};

export default ProgressBar;
