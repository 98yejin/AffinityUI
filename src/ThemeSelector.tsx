import React from "react";
import { Dropdown } from "./components/Dropdown";
import { useTheme } from "./themes/ThemeProvider";
import { themes } from "./themes/themes";

const ThemeSelector: React.FC = () => {
  const { themeName, setThemeName } = useTheme();

  const handleChange = (value: string) => {
    setThemeName(value as keyof typeof themes);
  };

  return (
    <Dropdown
      options={Object.keys(themes)}
      value={themeName}
      onChange={handleChange}
      placeholder="Select a theme"
    />
  );
};

export default ThemeSelector;
