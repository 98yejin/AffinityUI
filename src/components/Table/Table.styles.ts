import styled from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TableHeader = styled.th`
  padding: 10px;
  border-bottom: 2px solid ${({ theme }) => theme?.colors?.border || "#e0e0e0"};
  text-align: left;
  background-color: ${({ theme }) =>
    theme?.colors?.headerBackground || "#f8f9fa"};
  font-weight: bold;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) =>
      theme?.colors?.rowBackground || "#f2f2f2"};
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme?.colors?.border || "#e0e0e0"};
  color: ${({ theme }) => theme?.colors?.text || "#333"};
`;

export const TableBody = styled.tbody``;

export const SortButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  color: ${({ theme }) => theme?.colors?.textSecondary || "#007bff"};

  &:hover {
    color: ${({ theme }) => theme?.colors?.primary || "#0056b3"};
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  padding: 8px 12px;
  background-color: ${({ active, theme }) =>
    active
      ? theme?.colors?.primary || "#007bff"
      : theme?.colors?.background || "#fff"};
  color: ${({ active, theme }) =>
    active ? "#fff" : theme?.colors?.primary || "#007bff"};
  border: 1px solid ${({ theme }) => theme?.colors?.primary || "#007bff"};
  border-radius: ${({ theme }) => theme?.borderRadius || "4px"};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme }) =>
      theme?.colors?.hoverPrimary || "#0056b3"};
    color: #fff;
  }
`;
