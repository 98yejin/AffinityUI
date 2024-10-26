import styled from "styled-components";

interface ToggleContainerProps {
  size: "small" | "medium" | "large";
}

interface SliderProps {
  size: "small" | "medium" | "large";
  onColor: string;
  offColor: string;
  isChecked: boolean;
}

const sizeMap = {
  small: {
    width: "34px",
    height: "20px",
    slider: "16px",
  },
  medium: {
    width: "50px",
    height: "26px",
    slider: "22px",
  },
  large: {
    width: "68px",
    height: "34px",
    slider: "30px",
  },
};

export const ToggleContainer = styled.label<ToggleContainerProps>`
  position: relative;
  display: inline-block;
  width: ${({ size }) => sizeMap[size].width};
  height: ${({ size }) => sizeMap[size].height};
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span<SliderProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ isChecked, onColor, offColor }) =>
    isChecked ? onColor : offColor};
  transition: 0.4s;
  border-radius: ${({ size }) => (size === "small" ? "10px" : "17px")};

  &::before {
    position: absolute;
    content: "";
    height: ${({ size }) => sizeMap[size].slider};
    width: ${({ size }) => sizeMap[size].slider};
    left: ${({ isChecked, size }) =>
      isChecked
        ? `calc(${sizeMap[size].width} - ${sizeMap[size].slider} - 2px)`
        : "2px"};
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
