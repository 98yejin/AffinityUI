import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  background-color: #fff;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardHeader = styled.div`
  padding: 16px;
  font-size: 18px;
  font-weight: bold;
  background-color: #f9f9f9;
  border-bottom: 1px solid #e0e0e0;
`;

export const CardBody = styled.div`
  padding: 16px;
  font-size: 14px;
  color: #333;
`;

export const CardFooter = styled.div`
  padding: 16px;
  border-top: 1px solid #e0e0e0;
  background-color: #f9f9f9;
  text-align: right;
`;
