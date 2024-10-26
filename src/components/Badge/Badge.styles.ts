import styled from "styled-components";

interface BadgeContainerProps {
  variant: "default" | "success" | "warning" | "error";
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export const BadgeContainer = styled.div<BadgeContainerProps>`
  display: inline-block;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 12px;
  color: #fff;
  background-color: ${({ variant }) => {
    switch (variant) {
      case "success":
        return "#28a745";
      case "warning":
        return "#ffc107";
      case "error":
        return "#dc3545";
      case "default":
      default:
        return "#6c757d";
    }
  }};
  position: absolute;

  ${({ position }) => {
    switch (position) {
      case "top-left":
        return "top: 0; left: 0;";
      case "top-right":
        return "top: 0; right: 0;";
      case "bottom-left":
        return "bottom: 0; left: 0;";
      case "bottom-right":
        return "bottom: 0; right: 0;";
      default:
        return "top: 0; right: 0;";
    }
  }}
`;
