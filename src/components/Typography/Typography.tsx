import styled from "styled-components";

export const HeaderText = styled.h1<{ level?: 1 | 2 | 3 }>`
  font-size: ${({ theme, level }) => {
    switch (level) {
      case 1:
        return theme.headerFontSize || "2rem";
      case 2:
        return "1.5rem";
      case 3:
        return "1.25rem";
      default:
        return theme.headerFontSize || "2rem";
    }
  }};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize || "1rem"};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;
  margin-bottom: 16px;
`;
