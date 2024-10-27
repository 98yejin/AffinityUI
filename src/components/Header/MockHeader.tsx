import React from "react";
import Header from "./Header";
import { useTheme } from "../../themes";

const MockHeader: React.FC = () => {
  const { themeName } = useTheme();

  const getHeaderProps = (themeName: string) => {
    switch (themeName) {
      case "apple":
        return {
          logoText: "DesignApple",
          navItems: ["Home", "Products", "Support", "Contact"],
        };
      case "google":
        return {
          logoText: "DesignGoogle",
          navItems: ["Home", "Services", "Docs", "Contact"],
        };
      case "microsoft":
        return {
          logoText: "DesignMicrosoft",
          navItems: ["Home", "Software", "Enterprise", "Contact"],
        };
      case "airbnb":
        return {
          logoText: "DesignAirbnb",
          navItems: ["Home", "Explore", "Host", "Contact"],
        };
      case "spotify":
        return {
          logoText: "DesignSpotify",
          navItems: ["Home", "Music", "Premium", "Support"],
        };
      case "uber":
        return {
          logoText: "DesignUber",
          navItems: ["Home", "Rides", "Eat", "Help"],
        };
      case "notion":
        return {
          logoText: "DesignNotion",
          navItems: ["Home", "Features", "Pricing", "Blog"],
        };
      case "stripe":
        return {
          logoText: "DesignStripe",
          navItems: ["Home", "Pricing", "Docs", "Support"],
        };
      case "netflix":
        return {
          logoText: "DesignNetflix",
          navItems: ["Home", "TV Shows", "Movies", "Help"],
        };
      case "figma":
        return {
          logoText: "DesignFigma",
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

export default MockHeader;
