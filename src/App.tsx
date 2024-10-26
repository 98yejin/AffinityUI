import React from "react";
import { MultiSelect } from "./components/MultiSelect";

const App: React.FC = () => {
  const handleMultiSelectChange = (values: string[]) => {
    console.log("Selected values:", values);
  };

  return (
    <div>
      <MultiSelect
        options={["Option 1", "Option 2", "Option 3", "Option 4"]}
        placeholder="Select up to 2 options"
        maxSelections={2}
        onChange={handleMultiSelectChange}
      />
    </div>
  );
};

export default App;
