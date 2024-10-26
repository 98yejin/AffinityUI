import React, { FC, useState } from "react";
import {
  StyledInput,
  InputWrapper,
  ClearButton,
  SearchIcon,
} from "./SearchBar.styles";
import { FiSearch, FiX } from "react-icons/fi";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    setValue("");
    onSearch && onSearch("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(value);
    }
  };

  return (
    <InputWrapper>
      <SearchIcon>
        <FiSearch />
      </SearchIcon>
      <StyledInput
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      {value && (
        <ClearButton onClick={handleClear}>
          <FiX />
        </ClearButton>
      )}
    </InputWrapper>
  );
};

export default SearchBar;
