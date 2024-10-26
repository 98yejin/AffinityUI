import styled from "styled-components";

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

interface TooltipTextProps {
  position: "top" | "bottom" | "left" | "right";
}

export const TooltipText = styled.div<TooltipTextProps>`
  position: absolute;
  background: #333;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(0);
  transition: opacity 0.3s ease, transform 0.3s ease;

  ${({ position }) =>
    position === "top" &&
    `
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-8px);
  `}

  ${({ position }) =>
    position === "bottom" &&
    `
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(8px);
  `}

  ${({ position }) =>
    position === "left" &&
    `
    right: 100%;
    top: 50%;
    transform: translateY(-50%) translateX(-8px);
  `}

  ${({ position }) =>
    position === "right" &&
    `
    left: 100%;
    top: 50%;
    transform: translateY(-50%) translateX(8px);
  `}

  ${TooltipContainer}:hover & {
    opacity: 1;
    transform: ${({ position }) => {
      switch (position) {
        case "top":
          return "translateX(-50%) translateY(-4px)";
        case "bottom":
          return "translateX(-50%) translateY(12px)";
        case "left":
          return "translateY(-50%) translateX(-4px)";
        case "right":
          return "translateY(-50%) translateX(12px)";
        default:
          return "translateY(0)";
      }
    }};
  }
`;
