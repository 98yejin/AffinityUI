import React from "react";
import { Table } from "./components/Table";

const App: React.FC = () => {
  const columns = [
    { key: "name", label: "Name", sortable: true },
    { key: "age", label: "Age", sortable: true },
    { key: "email", label: "Email", sortable: false },
  ];

  const data = [
    { name: "John Doe", age: 25, email: "john@example.com" },
    { name: "Jane Smith", age: 30, email: "jane@example.com" },
    { name: "Sam Johnson", age: 22, email: "sam@example.com" },
    // ...more rows
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Table columns={columns} data={data} rowsPerPage={3} />
    </div>
  );
};

export default App;
