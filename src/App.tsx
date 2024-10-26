import React, { useState } from "react";
import { RadioButton, RadioButtonGroup } from "./components/RadioButton";

const App: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <div style={{ padding: "20px" }}>
      <RadioButtonGroup
        options={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2", disabled: true },
          { label: "Option 3", value: "option3" },
        ]}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
      />
    </div>
  );
};

export default App;
