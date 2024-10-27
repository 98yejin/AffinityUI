import React from "react";
import { useTheme } from "./themes/ThemeProvider";
import { Space } from "./components/Space";
import { Button } from "./components/Button";

const ThemeSelector: React.FC = () => {
  const { themeName, setThemeName } = useTheme();

  return (
    <Space
      direction="vertical"
      style={{ alignItems: "center", padding: "10%" }}
    >
      <Space direction="horizontal">
        <Button type="primary" onClick={() => setThemeName("apple")}>
          Apple
        </Button>
        <Button type="primary" onClick={() => setThemeName("google")}>
          Google
        </Button>
        <Button type="primary" onClick={() => setThemeName("microsoft")}>
          Microsoft
        </Button>
        <Button type="primary" onClick={() => setThemeName("airbnb")}>
          Airbnb
        </Button>
        <Button type="primary" onClick={() => setThemeName("spotify")}>
          Spotify
        </Button>
      </Space>
      <Space direction="horizontal">
        <Button type="primary" onClick={() => setThemeName("uber")}>
          Uber
        </Button>
        <Button type="primary" onClick={() => setThemeName("notion")}>
          Notion
        </Button>
        <Button type="primary" onClick={() => setThemeName("stripe")}>
          Stripe
        </Button>
        <Button type="primary" onClick={() => setThemeName("netflix")}>
          Netflix
        </Button>
        <Button type="primary" onClick={() => setThemeName("figma")}>
          Figma
        </Button>
      </Space>
    </Space>
  );
};

export default ThemeSelector;
