import React, { FC, useState, useRef } from "react";
import {
  InputWrapper,
  DropdownHeader,
  DropdownList,
  DropdownItem,
} from "./Dropdown.styles";

interface DropdownProps {
  options: string[];
  placeholder?: string;
  onSelect?: (value: string) => void;
}

const Dropdown: FC<DropdownProps> = ({
  options,
  placeholder = "Select an option",
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    onSelect && onSelect(value);
  };

  return (
    <InputWrapper ref={dropdownRef}>
      <DropdownHeader onClick={toggleDropdown} tabIndex={0}>
        {selectedValue ? selectedValue : placeholder}
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </InputWrapper>
  );
};

export default Dropdown;
