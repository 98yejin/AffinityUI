import styled from "styled-components";

interface StyledButtonProps {
  type?: "default" | "primary" | "link" | "text";
}

const getComplementaryColor = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const compR = 255 - r;
  const compG = 255 - g;
  const compB = 255 - b;
  return `#${compR.toString(16).padStart(2, "0")}${compG
    .toString(16)
    .padStart(2, "0")}${compB.toString(16).padStart(2, "0")}`;
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-block;
  width: auto;
  padding: 10px 20px;
  background-color: ${({ theme, type }) => {
    switch (type) {
      case "primary":
        return theme.colors.primary;
      case "link":
      case "text":
        return "transparent";
      case "default":
      default:
        return theme.colors.background || "#e0e0e0";
    }
  }};
  color: ${({ theme, type }) => {
    switch (type) {
      case "primary":
        return "#ffffff";
      case "link":
        return theme.colors.primary || "#007bff";
      case "text":
        const textColor = theme.colors.text || "#333";
        const bgColor = theme.colors.background || "#e0e0e0";
        return textColor === bgColor
          ? getComplementaryColor(textColor)
          : textColor;
      case "default":
      default:
        return theme.colors.text || "#333";
    }
  }};
  border: ${({ theme, type }) => {
    switch (type) {
      case "default":
        return `1px solid ${theme.colors.border || "#ccc"}`;
      case "primary":
        return `1px solid ${theme.colors.primary}`;
      default:
        return "none";
    }
  }};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.font};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme, type }) => {
      switch (type) {
        case "primary":
          return `${theme.colors.primary}D9`;
        case "default":
          return "#f0f0f0";
        case "link":
        case "text":
          return "transparent";
        default:
          return "";
      }
    }};
    color: ${({ theme, type }) =>
      type === "link" ? "#0056b3" : theme.colors.text};
  }

  &:focus {
    outline: ${({ type }) =>
      type === "link" || type === "text" ? "none" : "2px solid #0056b3"};
  }
`;
