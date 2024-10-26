import React, { useState } from "react";
import { ToggleSwitch } from "./components/ToggleSwitch";

const App: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div style={{ padding: "20px" }}>
      <ToggleSwitch
        isChecked={isToggled}
        onChange={handleToggle}
        size="large"
        onColor="#4caf50"
        offColor="#ccc"
      />
    </div>
  );
};

export default App;
