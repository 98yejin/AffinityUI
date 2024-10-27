import styled from "styled-components";
import { fadeIn } from "../../styles/animations";

export const InputWrapper = styled.div`
  margin-bottom: 16px;
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: ${({ theme }) => theme?.colors?.text || "#333"};
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme?.colors?.border || "#ccc"};
  border-radius: ${({ theme }) => theme?.borderRadius || "6px"};
  transition: all 0.3s ease-in-out;
  animation: ${fadeIn} 0.5s ease-out;
  background: none;
  color: ${({ theme }) => theme?.colors?.text || "#ccc"};

  &:focus {
    border-color: ${({ theme }) => theme?.colors?.primary || "#007bff"};
    box-shadow: 0 0 5px
      ${({ theme }) => theme?.colors?.primary || "rgba(0, 123, 255, 0.5)"};
    outline: none;
  }

  &:disabled {
    background-color: ${({ theme }) =>
      theme?.colors?.disabledBackground || "#f5f5f5"};
    cursor: not-allowed;
  }

  &.error {
    border-color: ${({ theme }) => theme?.colors?.error || "#dc3545"};
  }
`;
