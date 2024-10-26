import React from "react";
import { Tooltip } from "./components/Tooltip";
import { Button } from "./components/Button";

const App: React.FC = () => {
  return (
    <div>
      <Tooltip content="This is a tooltip" position="bottom">
        <Button>Hover over me</Button>
      </Tooltip>

      <Tooltip
        content={
          <span style={{ color: "yellow" }}>Custom Tooltip Content</span>
        }
        position="right"
      >
        <Button>Custom Tooltip</Button>
      </Tooltip>
    </div>
  );
};

export default App;
