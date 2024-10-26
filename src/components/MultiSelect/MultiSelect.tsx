import React, { FC, useState, useRef } from "react";
import {
  InputWrapper,
  DropdownHeader,
  DropdownList,
  DropdownItem,
  Tag,
  RemoveTagButton,
} from "./MultiSelect.styles";

interface MultiSelectProps {
  options: string[];
  placeholder?: string;
  onChange?: (values: string[]) => void;
  maxSelections?: number;
}

const MultiSelect: FC<MultiSelectProps> = ({
  options,
  placeholder = "Select options",
  onChange,
  maxSelections,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (value: string) => {
    if (selectedValues.includes(value)) {
      setSelectedValues((prev) => prev.filter((item) => item !== value));
      onChange && onChange(selectedValues.filter((item) => item !== value));
    } else {
      if (!maxSelections || selectedValues.length < maxSelections) {
        setSelectedValues((prev) => [...prev, value]);
        onChange && onChange([...selectedValues, value]);
      }
    }
  };

  const removeTag = (value: string) => {
    setSelectedValues((prev) => prev.filter((item) => item !== value));
    onChange && onChange(selectedValues.filter((item) => item !== value));
  };

  return (
    <InputWrapper ref={dropdownRef}>
      <DropdownHeader onClick={toggleDropdown} tabIndex={0}>
        {selectedValues.length > 0 ? (
          <div className="selected-tags">
            {selectedValues.map((value) => (
              <Tag key={value}>
                {value}
                <RemoveTagButton onClick={() => removeTag(value)}>
                  &times;
                </RemoveTagButton>
              </Tag>
            ))}
          </div>
        ) : (
          placeholder
        )}
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownItem
              key={index}
              onClick={() => handleOptionClick(option)}
              disabled={
                maxSelections !== undefined &&
                selectedValues.length >= maxSelections &&
                !selectedValues.includes(option)
              }
            >
              <input
                type="checkbox"
                checked={selectedValues.includes(option)}
                readOnly
                disabled={
                  maxSelections !== undefined &&
                  selectedValues.length >= maxSelections &&
                  !selectedValues.includes(option)
                }
              />
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </InputWrapper>
  );
};

export default MultiSelect;
