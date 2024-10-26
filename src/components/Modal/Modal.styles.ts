import styled, { keyframes, DefaultTheme } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.3s ease-out;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }: { theme: DefaultTheme }) =>
    theme?.colors?.background || "#fff"};
  border-radius: ${({ theme }: { theme: DefaultTheme }) =>
    theme?.borderRadius || "8px"};
  box-shadow: ${({ theme }: { theme: DefaultTheme }) =>
    theme?.boxShadow || "0 4px 16px rgba(0, 0, 0, 0.2)"};
  width: 500px;
  max-width: 90%;
  animation: ${fadeIn} 0.3s ease-out;
  z-index: 1001;
`;

interface ModalHeaderProps {
  border?: boolean;
}

export const ModalHeader = styled.div<ModalHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: ${({
    border,
    theme,
  }: {
    border?: boolean;
    theme: DefaultTheme;
  }) => (border ? `1px solid ${theme?.colors?.border || "#e0e0e0"}` : "none")};

  h2 {
    margin: 0;
    font-size: 20px;
  }
`;

export const ModalBody = styled.div`
  padding: 16px;
`;

export const ModalFooter = styled.div`
  padding: 16px;
  border-top: 1px solid
    ${({ theme }: { theme: DefaultTheme }) =>
      theme?.colors?.border || "#e0e0e0"};
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${({ theme }: { theme: DefaultTheme }) =>
    theme?.colors?.textSecondary || "#aaa"};

  &:hover {
    color: ${({ theme }: { theme: DefaultTheme }) =>
      theme?.colors?.text || "#333"};
  }
`;
