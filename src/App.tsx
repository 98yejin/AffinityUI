// App.tsx
import React from "react";
import { AppThemeProvider } from "./themes/ThemeProvider";
import ThemeSelector from "./ThemeSelector";
import { Button } from "./components/Button";

const App: React.FC = () => {
  return (
    <AppThemeProvider>
      <div style={{ padding: "20px" }}>
        <ThemeSelector />
        <Button>Click Me!</Button>
      </div>
    </AppThemeProvider>
  );
};

export default App;
