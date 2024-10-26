import React, { useState } from "react";
import { Checkbox, CheckboxGroup } from "./components/Checkbox";

const App: React.FC = () => {
  const [isSingleChecked, setIsSingleChecked] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  return (
    <div style={{ padding: "20px" }}>
      <Checkbox
        label="Single Checkbox"
        isChecked={isSingleChecked}
        onChange={() => setIsSingleChecked((prev) => !prev)}
      />

      <CheckboxGroup
        options={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
        ]}
        selectedValues={selectedValues}
        onChange={setSelectedValues}
      />
    </div>
  );
};

export default App;
