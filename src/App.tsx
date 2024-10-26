import React from "react";
import { SearchBar } from "./components/SearchBar";

const App: React.FC = () => {
  const handleSearch = (value: string) => {
    console.log("Search value:", value);
  };

  return (
    <div>
      <SearchBar placeholder="Search here..." onSearch={handleSearch} />
    </div>
  );
};

export default App;
