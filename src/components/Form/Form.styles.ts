import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme?.colors?.border || "#e0e0e0"};
  border-radius: ${({ theme }) => theme?.borderRadius || "8px"};
  background-color: ${({ theme }) => theme?.colors?.background || "#fff"};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormField = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: ${({ theme }) => theme?.colors?.text || "#333"};
`;

export const FormInput = styled.input`
  width: 95%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme?.colors?.border || "#ccc"};
  border-radius: ${({ theme }) => theme?.borderRadius || "4px"};
  font-size: 16px;

  &:focus {
    border-color: ${({ theme }) => theme?.colors?.primary || "#007bff"};
    outline: none;
  }
`;

export const FormError = styled.div`
  color: ${({ theme }) => theme?.colors?.error || "#dc3545"};
  margin-top: 8px;
  font-size: 14px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme?.colors?.primary || "#007bff"};
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme?.borderRadius || "4px"};
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme?.colors?.hoverPrimary || "#0056b3"};
  }
`;
