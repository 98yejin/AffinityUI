import React from "react";
import { useTheme } from "./themes/ThemeProvider";
import { Space } from "./components/Space";
import { Button } from "./components/Button";

const ThemeSelector: React.FC = () => {
  const { themeName, setThemeName } = useTheme();

  return (
    <Space
      direction="horizontal"
      style={{
        alignItems: "center",
        padding: "5%",
        justifyContent: "center",
        display: "flex",
      }}
    >
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
      <Button type="primary" onClick={() => setThemeName("slack")}>
        Slack
      </Button>
    </Space>
  );
};

export default ThemeSelector;
