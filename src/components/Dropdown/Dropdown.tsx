import React, { FC, useState, useRef, useEffect } from "react";
import {
  InputWrapper,
  DropdownHeader,
  DropdownList,
  DropdownItem,
} from "./Dropdown.styles";

interface DropdownProps {
  options: string[];
  value?: string | null;
  onChange?: (value: string) => void;
  placeholder?: string;
  onSelect?: (value: string) => void;
}

const Dropdown: FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(
    value || null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (value: string) => {
    if (!onChange) {
      setSelectedValue(value);
    }
    setIsOpen(false);
    onChange?.(value);
    onSelect?.(value);
  };

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  return (
    <InputWrapper ref={dropdownRef}>
      <DropdownHeader onClick={toggleDropdown} tabIndex={0}>
        {selectedValue ? selectedValue : placeholder}
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownItem
              key={index}
              onClick={() => handleOptionClick(option)}
              aria-selected={selectedValue === option}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </InputWrapper>
  );
};

export default Dropdown;
