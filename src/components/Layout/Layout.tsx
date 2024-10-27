import React, { FC, CSSProperties } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useTheme } from "../../themes/ThemeProvider";
import { themes } from "../../themes/themes";

interface LayoutProps {
  children: React.ReactNode;
  style?: CSSProperties;
}

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSize || "16px"};
`;

const Layout: FC<LayoutProps> = ({ children, style }) => {
  const { themeName } = useTheme();
  const theme = themes[themeName];

  return (
    <ThemeProvider theme={theme}>
      <LayoutContainer style={style}>{children}</LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
