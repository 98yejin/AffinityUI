import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface SpaceProps {
  children: ReactNode;
  direction?: "horizontal" | "vertical";
  size?: number;
}

const SpaceContainer = styled.div<{
  direction: "horizontal" | "vertical";
  size: number;
}>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "vertical" ? "column" : "row"};
  gap: ${({ size }) => size}px;
`;

const Space: FC<SpaceProps> = ({
  children,
  direction = "horizontal",
  size = 8,
}) => {
  return (
    <SpaceContainer direction={direction} size={size}>
      {React.Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </SpaceContainer>
  );
};

export default Space;
