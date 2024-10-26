// Notification.tsx
import React, { FC, useEffect } from "react";
import {
  NotificationContainer,
  NotificationMessage,
  CloseButton,
} from "./Notification.styles";
import { FiX } from "react-icons/fi";

interface NotificationProps {
  message: string | React.ReactNode;
  type?: "success" | "error" | "warning" | "info";
  onClose: () => void;
  autoDismiss?: boolean;
  autoDismissTime?: number; // Time in milliseconds
}

const Notification: FC<NotificationProps> = ({
  message,
  type = "info",
  onClose,
  autoDismiss = false,
  autoDismissTime = 3000,
}) => {
  useEffect(() => {
    if (autoDismiss) {
      const timer = setTimeout(() => {
        onClose();
      }, autoDismissTime);
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, autoDismissTime, onClose]);

  return (
    <NotificationContainer type={type}>
      <NotificationMessage>{message}</NotificationMessage>
      <CloseButton onClick={onClose} aria-label="Close notification">
        <FiX />
      </CloseButton>
    </NotificationContainer>
  );
};

export default Notification;
