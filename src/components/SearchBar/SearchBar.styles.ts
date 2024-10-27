import styled from "styled-components";
import { fadeIn } from "../../styles/animations";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 80vw;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme?.colors?.border || "#ccc"};
  border-radius: ${({ theme }) => theme?.borderRadius || "6px"};
  transition: all 0.3s ease-in-out;
  animation: ${fadeIn} 0.5s ease-out;

  &:focus-within {
    border-color: ${({ theme }) => theme?.colors?.primary || "#007bff"};
    box-shadow: 0 0 5px
      ${({ theme }) => theme?.colors?.primary || "rgba(0, 123, 255, 0.5)"};
  }
`;

export const SearchIcon = styled.span`
  margin-right: 8px;
  color: ${({ theme }) => theme?.colors?.icon || "#aaa"};
  font-size: 20px;
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  border: none;
  font-size: 16px;
  outline: none;
  background: none;
  color: ${({ theme }) => theme?.colors?.text || "#ccc"};

  &::placeholder {
    color: ${({ theme }) => theme?.colors?.placeholder || "#aaa"};
  }
`;

export const ClearButton = styled.button`
  margin-left: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme?.colors?.textSecondary || "#aaa"};
  font-size: 20px;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme?.colors?.text || "#333"};
  }
`;
