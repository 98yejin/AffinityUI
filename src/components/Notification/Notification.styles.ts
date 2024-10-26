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
  border-radius: 4px;
  color: #fff;
  background-color: ${({ type }) => {
    switch (type) {
      case "success":
        return "#28a745";
      case "error":
        return "#dc3545";
      case "warning":
        return "#ffc107";
      case "info":
      default:
        return "#007bff";
    }
  }};
`;

export const NotificationMessage = styled.div`
  flex-grow: 1;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  margin-left: 16px;

  &:hover {
    color: #e0e0e0;
  }
`;
