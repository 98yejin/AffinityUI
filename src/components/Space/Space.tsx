import React, { FC, ReactNode, CSSProperties } from "react";
import styled from "styled-components";

interface SpaceProps {
  children: ReactNode;
  direction?: "horizontal" | "vertical";
  size?: number;
  style?: CSSProperties;
}

const SpaceContainer = styled.div<{
  direction: "horizontal" | "vertical";
  size: number;
}>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "vertical" ? "column" : "row"};
  gap: ${({ size }) => size}px;
  ${({ direction }) =>
    direction === "horizontal" &&
    `
    flex-wrap: wrap; // Allow wrapping for horizontal direction
  `}
`;

const Space: FC<SpaceProps> = ({
  children,
  direction = "horizontal",
  size = 8,
  style,
}) => {
  return (
    <SpaceContainer direction={direction} size={size} style={style}>
      {React.Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </SpaceContainer>
  );
};

export default Space;
