import styled from "styled-components";
import { getHighContrastColor } from "../../utils/stylesUtils";
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
