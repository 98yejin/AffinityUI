import React, { FC, useState } from "react";
import {
  MenuContainer,
  MenuItem,
  MenuLabel,
  SubMenuContainer,
  ExpandIcon,
  IconWrapper,
} from "./Menu.styles";

interface MenuItemProps {
  label: string;
  key: string;
  icon?: React.ReactNode;
  items?: MenuItemProps[];
}

interface MenuProps {
  menuItems: MenuItemProps[];
  onSelect: (key: string) => void;
}

const Menu: FC<MenuProps> = ({ menuItems, onSelect }) => {
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);

  const handleItemClick = (item: MenuItemProps) => {
    const hasSubItems = item.items && item.items.length > 0;
    if (hasSubItems) {
      setExpandedKeys((prev) =>
        prev.includes(item.key)
          ? prev.filter((key) => key !== item.key)
          : [...prev, item.key]
      );
    }
    onSelect(item.key);
  };

  const renderMenuItems = (items: MenuItemProps[], level = 0) => {
    return items.map((item) => {
      const isExpanded = expandedKeys.includes(item.key);
      const hasSubItems = item.items && item.items.length > 0;

      return (
        <div key={item.key}>
          <MenuItem level={level} onClick={() => handleItemClick(item)}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {item.icon && <IconWrapper>{item.icon}</IconWrapper>}
              <MenuLabel>{item.label}</MenuLabel>
            </div>
            {hasSubItems && <ExpandIcon isExpanded={isExpanded} />}
          </MenuItem>
          {isExpanded && hasSubItems && (
            <SubMenuContainer>
              {item.items && renderMenuItems(item.items, level + 1)}
            </SubMenuContainer>
          )}
        </div>
      );
    });
  };

  return <MenuContainer>{renderMenuItems(menuItems)}</MenuContainer>;
};

export default Menu;
