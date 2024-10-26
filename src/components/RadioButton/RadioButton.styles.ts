import styled from "styled-components";

export const RadioButtonContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 4px;
`;

export const RadioButtonInput = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  cursor: pointer;
`;

export const RadioButtonLabel = styled.span<{ disabled: boolean }>`
  font-size: 14px;
  color: ${({ disabled }) => (disabled ? "#aaa" : "#333")};
`;
