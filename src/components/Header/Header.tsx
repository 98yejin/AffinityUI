import React from "react";
import { HeaderContainer, Logo, Nav, NavItem } from "./Header.styles";

interface HeaderProps {
  logoText: string;
  navItems: string[];
}

const Header: React.FC<HeaderProps> = ({ logoText, navItems }) => {
  return (
    <HeaderContainer>
      <Logo>{logoText}</Logo>
      <Nav>
        {navItems.map((item, index) => (
          <NavItem key={index}>{item}</NavItem>
        ))}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
