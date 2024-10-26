// Pagination.tsx
import React, { FC } from "react";
import { PaginationContainer, PageItem, PageButton } from "./Pagination.styles";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  paginationSize?: number;
}

const Pagination: FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  paginationSize = 5,
}) => {
  const generatePageNumbers = () => {
    const pages = [];
    const halfSize = Math.floor(paginationSize / 2);
    let startPage = Math.max(1, currentPage - halfSize);
    let endPage = Math.min(totalPages, currentPage + halfSize);

    if (endPage - startPage + 1 < paginationSize) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + paginationSize - 1);
      } else if (endPage === totalPages) {
        startPage = Math.max(1, endPage - paginationSize + 1);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <PaginationContainer>
      <PageButton
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </PageButton>
      {generatePageNumbers().map((page) => (
        <PageItem
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageItem>
      ))}
      <PageButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
