import React, {
  createContext,
  useContext,
  useState,
  FC,
  ReactNode,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { themes } from "./themes";

interface ThemeContextProps {
  themeName: keyof typeof themes;
  setThemeName: (name: keyof typeof themes) => void; // Updated type to accept specific theme names
}

interface AppThemeProviderProps {
  children: ReactNode; // Add the children property to the props type
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const AppThemeProvider: FC<AppThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<keyof typeof themes>("apple");

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <StyledThemeProvider theme={themes[themeName]}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
