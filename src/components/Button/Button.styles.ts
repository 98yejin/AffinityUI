import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 10px 20px;
  font-family: ${({ theme }) => theme.font};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.primary}D9; /* slightly transparent */
  }
`;
