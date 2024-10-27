import React from "react";
import Header from "./Header";
import { useTheme } from "../../themes";

const HeaderWithTheme: React.FC = () => {
  const { themeName } = useTheme();

  const getHeaderProps = (themeName: string) => {
    switch (themeName) {
      case "apple":
        return {
          logoText: "Apple",
          navItems: ["Home", "Products", "Support", "Contact"],
        };
      case "google":
        return {
          logoText: "Google",
          navItems: ["Home", "Services", "Docs", "Contact"],
        };
      case "microsoft":
        return {
          logoText: "Microsoft",
          navItems: ["Home", "Software", "Enterprise", "Contact"],
        };
      case "airbnb":
        return {
          logoText: "Airbnb",
          navItems: ["Home", "Explore", "Host", "Contact"],
        };
      case "spotify":
        return {
          logoText: "Spotify",
          navItems: ["Home", "Music", "Premium", "Support"],
        };
      case "uber":
        return { logoText: "Uber", navItems: ["Home", "Rides", "Eat", "Help"] };
      case "notion":
        return {
          logoText: "Notion",
          navItems: ["Home", "Features", "Pricing", "Blog"],
        };
      case "stripe":
        return {
          logoText: "Stripe",
          navItems: ["Home", "Pricing", "Docs", "Support"],
        };
      case "netflix":
        return {
          logoText: "Netflix",
          navItems: ["Home", "TV Shows", "Movies", "Help"],
        };
      case "figma":
        return {
          logoText: "Figma",
          navItems: ["Home", "Design", "Enterprise", "Community"],
        };
      default:
        return {
          logoText: "Default",
          navItems: ["Home", "About", "Services", "Contact"],
        };
    }
  };

  const headerProps = getHeaderProps(themeName);

  return <Header {...headerProps} />;
};

export default HeaderWithTheme;
