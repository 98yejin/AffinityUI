import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100%;
  max-width: 280px;
  border: 1px solid ${({ theme }) => theme?.colors?.border || "#ddd"};
  border-radius: ${({ theme }) => theme?.borderRadius || "4px"};
  background-color: ${({ theme }) => theme?.colors?.background || "#ffffff"};
  box-shadow: ${({ theme }) =>
    theme?.boxShadow || "0 4px 8px rgba(0, 0, 0, 0.1)"};
  padding: 8px 0;
`;

interface MenuItemProps {
  level: number;
}

export const MenuItem = styled.div<MenuItemProps>`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme?.colors?.background || "#fff"};
  border-radius: ${({ theme }) => theme?.borderRadius || "4px"};
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme?.colors?.hoverBackground || "#f0f0f0"};
    color: ${({ theme }) => theme?.colors?.hoverColor || "#f0f0f0"};
  }

  ${({ level }) =>
    level > 0 &&
    `
    padding-left: ${level * 16 + 16}px;
  `}
`;

export const MenuItemWrapper = styled.div`
  margin-bottom: 8px;
`;

export const MenuLabel = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme?.colors?.text || "#333"};
`;

export const SubMenuContainer = styled.div`
  padding-left: 0;
  background-color: ${({ theme }) =>
    theme?.colors?.submenuBackground || "#f6f8fa"};
  border-radius: ${({ theme }) => theme?.borderRadius || "4px"};
`;

export const ExpandIcon = styled.span<{ isExpanded: boolean }>`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-left: 2px solid ${({ theme }) => theme?.colors?.primary || "#007bff"};
  border-bottom: 2px solid ${({ theme }) => theme?.colors?.primary || "#007bff"};
  transform: ${({ isExpanded }) =>
    isExpanded ? "rotate(45deg)" : "rotate(-45deg)"};
  transition: transform 0.3s ease;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;
