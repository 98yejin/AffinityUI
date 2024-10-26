import React from "react";
import { Avatar } from "./components/Avatar";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <Avatar initials="CD" size="small" />
    </div>
  );
};

export default App;
