import React from "react";
import Card from "./Card";
import { useTheme } from "../../themes";
import { Space } from "../Space";

const MockCard: React.FC = () => {
  const { themeName } = useTheme();
  const getCardTexts = (themeName: string) => {
    switch (themeName) {
      case "apple":
        return [
          "Smooth, natural, elegant. Minimalistic yet refined transitions.",
          "Subtle zoom-ins, fades, parallax effects, easing curves that feel natural.",
        ];
      case "google":
        return [
          "Crisp, responsive, deliberate.",
          "Elevation changes, scale transformations, bouncing buttons, responsive ripple effects.",
        ];
      case "microsoft":
        return [
          "Depth, light, and fluidity.",
          "Soft elevation and depth changes, motion triggered by user interactions, smooth hover effects.",
        ];
      case "airbnb":
        return [
          "Welcoming, delightful, elegant.",
          "Card animations for scrolling content, smooth reveals, subtle bounce on elements like buttons or cards.",
        ];
      case "spotify":
        return [
          "Energetic, musical, fluid.",
          "Playlist scrolling with inertia, animated transitions between album covers, background color shifts matching album art.",
        ];
      case "uber":
        return [
          "Efficient, direct, utility-driven.",
          "Snappy interactions, sliding panels, location markers dropping in on maps, quick page transitions.",
        ];
      case "notion":
        return [
          "Clean, functional, purposeful.",
          "Simple slide-ins for sidebars, hover effects that subtly indicate interaction, minimal transition animations.",
        ];
      case "stripe":
        return [
          "Polished, professional, tech-centric.",
          "Fade-ins for important details, sliding effects for forms, focused indicator animations.",
        ];
      case "netflix":
        return [
          "Cinematic, immersive, dynamic.",
          "Smooth carousel scrolling, transition blurs between content, pop-ins for quick information, attention-grabbing micro-interactions.",
        ];
      case "figma":
        return [
          "Collaborative, precise, real-time.",
          "Instant feedback, collaborative indicator movements, hover effects for UI exploration.",
        ];
      default:
        return ["Default style.", "Default animations."];
    }
  };

  const cardTexts = getCardTexts(themeName);
  return (
    <Space direction="vertical" style={{ alignItems: "end", padding: "1%" }}>
      {cardTexts.map((text, index) => (
        <Card key={index} body={text} />
      ))}
    </Space>
  );
};

export default MockCard;
