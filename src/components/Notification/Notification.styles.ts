import styled from "styled-components";

interface NotificationContainerProps {
  type: "success" | "error" | "warning" | "info";
}

export const NotificationContainer = styled.div<NotificationContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: ${({ theme }) => theme?.borderRadius || "4px"};
  color: #fff;
  background-color: ${({ type, theme }) => {
    switch (type) {
      case "success":
        return theme?.colors?.success || "#28a745";
      case "error":
        return theme?.colors?.error || "#dc3545";
      case "warning":
        return theme?.colors?.warning || "#ffc107";
      case "info":
      default:
        return theme?.colors?.info || "#007bff";
    }
  }};
`;

export const NotificationMessage = styled.div`
  flex-grow: 1;
  color: ${({ theme }) => theme?.colors?.hoverText || "#fff"};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  margin-left: 16px;

  &:hover {
    color: ${({ theme }) => theme?.colors?.hoverText || "#e0e0e0"};
  }
`;
