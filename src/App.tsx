import React from "react";
import { Card } from "./components/Card";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px", display: "flex", gap: "20px" }}>
      <Card
        header="Card Header"
        body={<p>This is the card body content.</p>}
        footer={<button>Learn More</button>}
        imageUrl="https://via.placeholder.com/300"
      />
      <Card body={<p>Another card without an image or footer.</p>} />
    </div>
  );
};

export default App;
