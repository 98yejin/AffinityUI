import styled from "styled-components";

export const TabsContainer = styled.div`
  width: 100%;
`;

export const TabsHeader = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme?.colors?.border || "#ccc"};
`;

interface TabProps {
  active: boolean;
}

export const Tab = styled.button<TabProps>`
  padding: 12px 16px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 16px;
  transition: color 0.3s, border-bottom 0.3s;
  border-bottom: ${({ active, theme }) =>
    active ? `2px solid ${theme?.colors?.primary || "#007bff"}` : "none"};
  color: ${({ active, theme }) =>
    active
      ? theme?.colors?.primary || "#007bff"
      : theme?.colors?.textSecondary || "#555"};

  &:hover {
    color: ${({ theme }) => theme?.colors?.primary || "#007bff"};
  }
`;

export const TabContent = styled.div`
  padding: 16px;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
