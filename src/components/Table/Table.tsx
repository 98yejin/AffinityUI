import React, { FC, useState } from "react";
import {
  TableContainer,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  SortButton,
  PaginationContainer,
  PageButton,
} from "./Table.styles";

interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
}

interface TableProps {
  columns: TableColumn[];
  data: { [key: string]: any }[];
  rowsPerPage?: number;
}

const Table: FC<TableProps> = ({ columns, data, rowsPerPage = 5 }) => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedData = () => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const paginatedData = sortedData().slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <>
      <TableContainer>
        <thead>
          <TableRow>
            {columns.map((column) => (
              <TableHeader key={column.key}>
                {column.label}
                {column.sortable && (
                  <SortButton onClick={() => handleSort(column.key)}>
                    {sortConfig?.key === column.key
                      ? sortConfig.direction === "asc"
                        ? "▲"
                        : "▼"
                      : "⇅"}
                  </SortButton>
                )}
              </TableHeader>
            ))}
          </TableRow>
        </thead>
        <TableBody>
          {paginatedData.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column.key}>{row[column.key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
      <PaginationContainer>
        <PageButton
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </PageButton>
        {Array.from({ length: totalPages }, (_, i) => (
          <PageButton
            key={i}
            active={currentPage === i + 1}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </PageButton>
        ))}
        <PageButton
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </PageButton>
      </PaginationContainer>
    </>
  );
};

export default Table;
