import React, { FC, ReactNode } from "react";
import { BadgeContainer } from "./Badge.styles";

interface BadgeProps {
  content: string | number | ReactNode;
  variant?: "default" | "success" | "warning" | "error";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const Badge: FC<BadgeProps> = ({
  content,
  variant = "default",
  position = "top-right",
}) => {
  return (
    <BadgeContainer variant={variant} position={position}>
      {content}
    </BadgeContainer>
  );
};

export default Badge;
