import styled from "styled-components";

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CheckboxInput = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  cursor: pointer;
`;

export const CheckboxLabel = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme?.colors?.text || "#333"};
`;
