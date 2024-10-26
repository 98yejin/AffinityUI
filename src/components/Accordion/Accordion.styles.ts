import styled from "styled-components";

export const AccordionContainer = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary}20;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const AccordionItem = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.primary}20;

  &:first-child {
    border-top: none;
  }
`;

export const AccordionHeader = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background}20;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}10;
  }
`;

export const AccordionContent = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background};
  animation: slideDown 0.3s ease;

  @keyframes slideDown {
    from {
      max-height: 0;
      opacity: 0;
    }
    to {
      max-height: 1000px;
      opacity: 1;
    }
  }
`;
