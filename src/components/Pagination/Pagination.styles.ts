import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`;

interface PageItemProps {
  active: boolean;
}

export const PageItem = styled.button<PageItemProps>`
  padding: 8px 12px;
  border: none;
  background-color: ${({ active, theme }) =>
    active ? theme?.colors?.primary || "#007bff" : "transparent"};
  color: ${({ active, theme }) =>
    active ? "#fff" : theme?.colors?.primary || "#007bff"};
  cursor: pointer;
  border-radius: ${({ theme }) => theme?.borderRadius || "4px"};

  &:hover {
    background-color: ${({ active, theme }) =>
      active
        ? theme?.colors?.hoverPrimary || "#0056b3"
        : theme?.colors?.hoverBackground || "#e9ecef"};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme?.colors?.disabledText || "#6c757d"};
  }
`;

export const PageButton = styled.button`
  padding: 8px 12px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme?.colors?.primary || "#007bff"};
  cursor: pointer;
  border-radius: ${({ theme }) => theme?.borderRadius || "4px"};

  &:hover {
    background-color: ${({ theme }) =>
      theme?.colors?.hoverBackground || "#e9ecef"};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme?.colors?.disabledText || "#6c757d"};
  }
`;
