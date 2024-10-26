import React from "react";
import { Badge } from "./components/Badge";

const App: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100px",
        height: "100px",
        background: "#f0f0f0",
        margin: "50px",
      }}
    >
      <Badge content={500} variant="error" position="top-right" />
    </div>
  );
};

export default App;
