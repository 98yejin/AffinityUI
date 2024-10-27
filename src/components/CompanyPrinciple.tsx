import React from "react";
import styled from "styled-components";
import { useTheme } from "../themes/ThemeProvider";
import { themes } from "../themes/themes";
import { getHighContrastColor } from "../utils/stylesUtils";
import { Space } from "./Space";
import { Tooltip } from "./Tooltip";

const Pre = styled.div`
  font-size: ${({ theme }) => theme.header.logoFontSize};
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => getHighContrastColor(theme.colors.background)};
  font-weight: bold;
  margin-right: 32px;
`;

export const Post = styled.div`
  font-size: 16px;
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => getHighContrastColor(theme.colors.background)};
  cursor: pointer;
  transition: color 0.3s;
}`;

const PrincipleText = ({ text }: { text: string }) => {
  const { themeName } = useTheme();
  const theme = themes[themeName];

  const [prePart, postPart] = text.split("—");

  return (
    <Space
      direction="vertical"
      style={{ padding: "5%", paddingBottom: 0, alignItems: "center" }}
    >
      <Tooltip content="Principle" position="top">
        <Pre theme={theme}>{prePart}</Pre>
        <Post theme={theme}>{postPart}</Post>
      </Tooltip>
    </Space>
  );
};

const CompanyPrinciples: React.FC = () => {
  const { themeName } = useTheme();

  const principles: { [key: string]: string } = {
    apple:
      "Innovation that inspires—crafting products that embody simplicity, elegance, and cutting-edge technology.",
    google:
      "Organizing the world's information—clear, connected, and at your fingertips.",
    microsoft:
      "Empowering every person and organization to achieve more—tools designed for productivity and creativity.",
    airbnb:
      "Belong anywhere—making the world feel like home, wherever you are.",
    spotify:
      "The soundtrack to your life—bringing the world's music to your ears, seamlessly.",
    uber: "The freedom to move—efficient and direct solutions for getting you where you need to go.",
    notion:
      "The all-in-one workspace—focused, flexible, and functional, built for your ideas.",
    stripe:
      "Infrastructure for the internet economy—making payments simple, secure, and scalable.",
    netflix:
      "Stories that move you—immersive entertainment that connects people to the content they love.",
    figma:
      "Design together, from anywhere—real-time collaboration for every idea, big or small.",
  };

  const principleText = principles[themeName] || "Default Principle";

  return <PrincipleText text={principleText} />;
};

export default CompanyPrinciples;
