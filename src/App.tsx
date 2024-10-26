import React from "react";
import { Form } from "./components/Form";

const App: React.FC = () => {
  const handleSubmit = (formData: { [key: string]: string }) => {
    console.log("Form submitted:", formData);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Form
        fields={[
          { name: "username", label: "Username", type: "text", required: true },
          {
            name: "email",
            label: "Email",
            type: "email",
            required: true,
            validation: (value) =>
              !/\S+@\S+\.\S+/.test(value) ? "Invalid email address" : null,
          },
          {
            name: "password",
            label: "Password",
            type: "password",
            required: true,
            validation: (value) =>
              value.length < 6
                ? "Password must be at least 6 characters"
                : null,
          },
        ]}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
