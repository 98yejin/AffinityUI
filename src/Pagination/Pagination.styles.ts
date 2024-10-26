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
  background-color: ${({ active }) => (active ? "#007bff" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#007bff")};
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${({ active }) => (active ? "#0056b3" : "#e9ecef")};
  }

  &:disabled {
    cursor: not-allowed;
    color: #6c757d;
  }
`;

export const PageButton = styled.button`
  padding: 8px 12px;
  border: none;
  background-color: transparent;
  color: #007bff;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #e9ecef;
  }

  &:disabled {
    cursor: not-allowed;
    color: #6c757d;
  }
`;
