import styled from "styled-components";

interface ProgressProps {
  value: number;
  color: "primary" | "success" | "warning" | "danger";
}

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  height: 24px;
`;

export const Progress = styled.div<ProgressProps>`
  height: 100%;
  width: ${({ value }) => value}%;
  background-color: ${({ color }) => {
    switch (color) {
      case "success":
        return "#28a745";
      case "warning":
        return "#ffc107";
      case "danger":
        return "#dc3545";
      case "primary":
      default:
        return "#007bff";
    }
  }};
  transition: width 0.4s ease;
`;

export const ProgressLabel = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: #fff;
  top: 50%;
  transform: translateY(-50%);
`;
