import React, { FC } from "react";
import { SpinnerContainer, Spinner } from "./LoadingSpinner.styles";

// LoadingSpinner.styles.ts
import styled, { keyframes } from "styled-components";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  color?: string;
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  size = "medium",
  color = "#007bff",
}) => {
  return (
    <SpinnerContainer>
      <Spinner size={size} color={color} />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
