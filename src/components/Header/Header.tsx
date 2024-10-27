import React, { useState } from "react";
import {
  HeaderContainer,
  Logo,
  Nav,
  NavItem,
  HamburgerButton,
  MobileMenu,
} from "./Header.styles";

interface HeaderProps {
  logoText: string;
  navItems: string[];
}

const Header: React.FC<HeaderProps> = ({ logoText, navItems }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>{logoText}</Logo>
      <HamburgerButton onClick={toggleMobileMenu}>☰</HamburgerButton>
      <Nav isMobileMenuOpen={isMobileMenuOpen}>
        {navItems.map((item, index) => (
          <NavItem key={index}>{item}</NavItem>
        ))}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
