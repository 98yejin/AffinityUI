import styled from "styled-components";
import { fadeIn } from "../../styles/animations";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  animation: ${fadeIn} 0.5s ease-out;

  &:focus-within {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const SearchIcon = styled.span`
  margin-right: 8px;
  color: #aaa;
  font-size: 20px;
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  border: none;
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: #aaa;
  }
`;

export const ClearButton = styled.button`
  margin-left: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: #aaa;
  font-size: 20px;
  transition: color 0.2s;

  &:hover {
    color: #333;
  }
`;
