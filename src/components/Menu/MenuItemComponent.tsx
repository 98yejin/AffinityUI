import React, { FC, useState } from "react";
import {
  MenuItem,
  MenuLabel,
  SubMenuContainer,
  ExpandIcon,
  MenuItemWrapper,
} from "./Menu.styles";

interface MenuItemProps {
  label: string;
  key: string;
  icon?: React.ReactNode;
  items?: MenuItemProps[];
}

interface MenuItemComponentProps {
  item: MenuItemProps;
  level: number;
  onSelect: (key: string) => void;
}

const MenuItemComponent: FC<MenuItemComponentProps> = ({
  item,
  level,
  onSelect,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasSubItems = item.items && item.items.length > 0;

  const handleItemClick = () => {
    if (hasSubItems) {
      setIsExpanded((prev) => !prev);
    }
    onSelect(item.key);
  };

  return (
    <MenuItemWrapper>
      <MenuItem level={level} onClick={handleItemClick}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {item.icon && <span>{item.icon}</span>}
          <MenuLabel>{item.label}</MenuLabel>
        </div>
        {hasSubItems && <ExpandIcon isExpanded={isExpanded} />}
      </MenuItem>
      {isExpanded && hasSubItems && (
        <SubMenuContainer>
          {item.items!.map((subItem) => (
            <MenuItemComponent
              key={subItem.key}
              item={subItem}
              level={level + 1}
              onSelect={onSelect}
            />
          ))}
        </SubMenuContainer>
      )}
    </MenuItemWrapper>
  );
};

export default MenuItemComponent;
