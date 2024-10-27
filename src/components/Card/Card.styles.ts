import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid ${({ theme }) => theme?.colors?.border || "#e0e0e0"};
  border-radius: ${({ theme }) => theme?.borderRadius || "8px"};
  overflow: hidden;
  box-shadow: ${({ theme }) =>
    theme?.boxShadow || "0 4px 8px rgba(0, 0, 0, 0.1)"};
  width: 300px;
  background-color: ${({ theme }) => theme?.colors?.background || "#fff"};
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardHeader = styled.div`
  padding: 16px;
  font-size: 18px;
  font-weight: bold;
  background-color: ${({ theme }) => theme?.colors?.background || "#f9f9f9"};
  border-bottom: 1px solid ${({ theme }) => theme?.colors?.border || "#e0e0e0"};
`;

export const CardBody = styled.div`
  padding: 16px;
  font-size: 14px;
  color: ${({ theme }) => theme?.colors?.text || "#333"};
`;

export const CardFooter = styled.div`
  padding: 16px;
  border-top: 1px solid ${({ theme }) => theme?.colors?.border || "#e0e0e0"};
  background-color: ${({ theme }) => theme?.colors?.background || "#f9f9f9"};
  text-align: right;
`;
