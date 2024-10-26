import React, { useState } from "react";
import { Pagination } from "./Pagination";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        paginationSize={5}
      />
    </div>
  );
};

export default App;
