import React, { FC, useState } from "react";
import {
  FormContainer,
  FormField,
  FormLabel,
  FormInput,
  FormError,
  SubmitButton,
} from "./Form.styles";

interface FormFieldProps {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  required?: boolean;
  validation?: (value: string) => string | null;
}

interface FormProps {
  fields: FormFieldProps[];
  onSubmit: (formData: { [key: string]: string }) => void;
}

const Form: FC<FormProps> = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors: { [key: string]: string | null } = {};

    fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = "This field is required";
        valid = false;
      } else if (field.validation) {
        const error = field.validation(formData[field.name] || "");
        if (error) {
          newErrors[field.name] = error;
          valid = false;
        }
      }
    });

    setErrors(newErrors);

    if (valid) {
      onSubmit(formData);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {fields.map((field) => (
        <FormField key={field.name}>
          <FormLabel>{field.label}</FormLabel>
          <FormInput
            type={field.type}
            value={formData[field.name] || ""}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
          />
          {errors[field.name] && <FormError>{errors[field.name]}</FormError>}
        </FormField>
      ))}
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
};

export default Form;
