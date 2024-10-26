// ThemeSelector.tsx
import React from "react";
import { useTheme } from "./themes/ThemeProvider";
import { themes } from "./themes/themes";

const ThemeSelector: React.FC = () => {
  const { themeName, setThemeName } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = e.target.value as keyof typeof themes; // Cast value to valid type
    if (selectedTheme in themes) {
      setThemeName(selectedTheme);
    }
  };

  return (
    <select value={themeName} onChange={handleChange}>
      <option value="apple">Apple</option>
      <option value="google">Google</option>
      <option value="microsoft">Microsoft</option>
      <option value="airbnb">Airbnb</option>
      <option value="spotify">Spotify</option>
      <option value="uber">Uber</option>
      <option value="notion">Notion</option>
      <option value="stripe">Stripe</option>
      <option value="netflix">Netflix</option>
      <option value="figma">Figma</option>
    </select>
  );
};

export default ThemeSelector;
