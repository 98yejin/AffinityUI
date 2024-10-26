import styled from "styled-components";
import { fadeIn } from "../../styles/animations";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin-bottom: 16px;
  font-size: 16px;
`;

export const DropdownHeader = styled.div`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme?.colors?.border || "#ccc"};
  border-radius: ${({ theme }) => theme?.borderRadius || "6px"};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  animation: ${fadeIn} 0.5s ease-out;
  background-color: ${({ theme }) => theme?.colors?.background || "#fff"};

  &:focus {
    border-color: ${({ theme }) => theme?.colors?.primary || "#007bff"};
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  padding: 0;
  margin: 0;
  list-style: none;
  border: 1px solid ${({ theme }) => theme?.colors?.border || "#ccc"};
  border-radius: ${({ theme }) => theme?.borderRadius || "6px"};
  box-shadow: ${({ theme }) =>
    theme?.boxShadow || "0 4px 8px rgba(0, 0, 0, 0.1)"};
  background-color: ${({ theme }) => theme?.colors?.background || "#fff"};
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
`;

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) =>
      theme?.colors?.hoverBackground || "#f0f0f0"};
  }
`;
