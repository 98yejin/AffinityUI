import styled from "styled-components";
import { getHighContrastColor } from "../../utils/stylesUtils";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.boxShadow};
  position: relative;
  z-index: 1;
`;

export const Logo = styled.div`
  font-size: ${({ theme }) => theme.header.logoFontSize};
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => getHighContrastColor(theme.colors.primary)};
  font-weight: bold;
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: ${({ theme }) => getHighContrastColor(theme.colors.primary)};
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Nav = styled.nav<{ isMobileMenuOpen: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.header.navGap};

  @media (max-width: 768px) {
    display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 16px;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 16px;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;

export const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 60px;
  right: 16px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px;
  border-radius: ${({ theme }) => theme.borderRadius};
  z-index: 1;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavItem = styled.div`
  font-size: 16px;
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => getHighContrastColor(theme.colors.primary)};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverColor};
  }
`;
