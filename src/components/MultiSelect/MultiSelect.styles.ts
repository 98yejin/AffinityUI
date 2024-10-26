import styled from "styled-components";
import { fadeIn } from "../../styles/animations";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin-bottom: 16px;
  font-size: 16px;
`;

export const DropdownHeader = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  animation: ${fadeIn} 0.5s ease-out;
  background-color: #fff;

  &:focus {
    border-color: #007bff;
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
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
`;

export const DropdownItem = styled.li<{ disabled?: boolean }>`
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "none" : "#f0f0f0")};
  }

  input {
    margin-right: 10px;
  }
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  background-color: #e0e0e0;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 12px;
`;

export const RemoveTagButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  margin-left: 5px;
  font-size: 16px;
`;
