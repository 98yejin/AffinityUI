import styled from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TableHeader = styled.th`
  padding: 10px;
  border-bottom: 2px solid #e0e0e0;
  text-align: left;
  background-color: #f8f9fa;
  font-weight: bold;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

export const TableBody = styled.tbody``;

export const SortButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 5px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  padding: 8px 12px;
  background-color: ${({ active }) => (active ? "#007bff" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#007bff")};
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    background-color: #0056b3;
    color: #fff;
  }
`;
