import React from "react";
import { Menu } from "./components/Menu";

const App: React.FC = () => {
  const menuItems = [
    {
      label: "Home",
      key: "home",
    },
    {
      label: "Services",
      key: "services",
      items: [
        { label: "Consulting", key: "consulting" },
        { label: "Development", key: "development" },
        { label: "Design", key: "design" },
      ],
    },
    {
      label: "About Us",
      key: "about",
    },
    {
      label: "Contact",
      key: "contact",
    },
  ];

  const handleSelect = (key: string) => {
    console.log(`Selected: ${key}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Menu menuItems={menuItems} onSelect={handleSelect} />
    </div>
  );
};

export default App;
