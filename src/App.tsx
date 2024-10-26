import React from "react";
import { Dropdown } from "./components/Dropdown";

const App: React.FC = () => {
  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };

  return (
    <div>
      <Dropdown
        options={["Option 1", "Option 2", "Option 3"]}
        placeholder="Choose an option"
        onSelect={handleSelect}
      />
    </div>
  );
};

export default App;
