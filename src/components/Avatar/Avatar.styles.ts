import styled from "styled-components";

interface AvatarContainerProps {
  size: "small" | "medium" | "large";
  shape: "circle" | "square";
  backgroundColor: string;
}

const sizeMap = {
  small: "32px",
  medium: "48px",
  large: "72px",
};

export const AvatarContainer = styled.div<AvatarContainerProps>`
  width: ${({ size }) => sizeMap[size]};
  height: ${({ size }) => sizeMap[size]};
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ shape }) => (shape === "circle" ? "50%" : "8px")};
  font-size: ${({ size }) =>
    size === "small" ? "14px" : size === "medium" ? "18px" : "24px"};
  color: #fff;
  overflow: hidden;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AvatarInitials = styled.span`
  font-weight: bold;
`;
