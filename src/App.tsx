import React from "react";
import { Breadcrumb } from "./components/Breadcrumb";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Electronics", href: "/products/electronics" },
          { label: "Mobile Phones" },
        ]}
        separator=">"
      />
    </div>
  );
};

export default App;
