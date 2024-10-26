import React, { FC, ReactNode, useState } from "react";
import { TooltipContainer, TooltipText } from "./Tooltip.styles";

interface TooltipProps {
  children: ReactNode;
  content: string | ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

const Tooltip: FC<TooltipProps> = ({ children, content, position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <TooltipContainer onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {isVisible && <TooltipText position={position}>{content}</TooltipText>}
    </TooltipContainer>
  );
};

export default Tooltip;
