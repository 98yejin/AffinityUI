import React from "react";
import { ProgressBar } from "./components/ProgressBar";

const App: React.FC = () => {
  return (
    <div>
      <h3>Task Progress</h3>
      <ProgressBar value={70} label="70%" color="primary" />
      <ProgressBar value={45} label="45%" color="warning" />
      <ProgressBar value={100} label="Completed" color="success" />
    </div>
  );
};

export default App;
