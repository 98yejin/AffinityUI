import styled from "styled-components";

const getHighContrastColor = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  // Luminance formula to determine if a color is light or dark
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  // If luminance is below the threshold, return white, otherwise return black for high contrast
  return luminance < 128 ? "#FFFFFF" : "#000000";
};

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Logo = styled.div`
  font-size: ${({ theme }) => theme.header.logoFontSize};
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => getHighContrastColor(theme.colors.primary)};
  font-weight: bold;
  margin-right: 32px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.header.navGap};
`;

export const NavItem = styled.div`
  font-size: 16px;
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => getHighContrastColor(theme.colors.primary)};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => {
      const hoverColor = theme.colors.hoverColor;
      return getHighContrastColor(hoverColor);
    }};
  }
`;
