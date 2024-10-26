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
  background-color: ${({ variant, theme }) => {
    switch (variant) {
      case "success":
        return theme?.colors?.success || "#28a745";
      case "warning":
        return theme?.colors?.warning || "#ffc107";
      case "error":
        return theme?.colors?.error || "#dc3545";
      case "default":
      default:
        return theme?.colors?.default || "#6c757d";
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

export const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${({ theme }) => theme?.colors?.primary || "#007bff"};
`;

export const BreadcrumbItem = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme?.colors?.primary || "#007bff"};

  &:hover {
    text-decoration: underline;
  }
`;

export const BreadcrumbSeparator = styled.span`
  margin: 0 8px;
  color: ${({ theme }) => theme?.colors?.separator || "#6c757d"};
`;
