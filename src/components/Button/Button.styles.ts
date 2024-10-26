import styled from "styled-components";
import { fadeIn } from "../../styles/animations";

interface StyledButtonProps {
  variant: "primary" | "secondary";
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  animation: ${fadeIn} 0.5s ease-out;

  background-color: ${({ variant }) =>
    variant === "primary" ? "#007bff" : "#6c757d"};
  color: #ffffff;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.95);
  }
`;
