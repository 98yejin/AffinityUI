import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

interface SpinnerProps {
  size: "small" | "medium" | "large";
  color: string;
}

const sizeMap = {
  small: "20px",
  medium: "40px",
  large: "60px",
};

export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Spinner = styled.div<SpinnerProps>`
  width: ${({ size }) => sizeMap[size]};
  height: ${({ size }) => sizeMap[size]};
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid ${({ color }) => color};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
