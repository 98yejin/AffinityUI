import styled from "styled-components";

export const AccordionContainer = styled.div`
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

export const AccordionItem = styled.div`
  border-top: 1px solid #e0e0e0;

  &:first-child {
    border-top: none;
  }
`;

export const AccordionHeader = styled.div`
  padding: 16px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e9e9e9;
  }
`;

export const AccordionContent = styled.div`
  padding: 16px;
  background-color: #fff;
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
