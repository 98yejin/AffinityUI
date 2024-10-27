import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button Component", () => {
  // Test case to check if button renders correctly
  it("should render the button with children text", () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  // Test case to verify onClick is called when button is clicked
  it("should call onClick handler when clicked", () => {
    const handleClick = jest.fn(); // Mock function to check click event
    render(<Button onClick={handleClick}>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test case to check if button has correct variant styling
  it("should apply primary variant styles", () => {
    render(<Button type="primary">Primary Button</Button>);
    const buttonElement = screen.getByText(/primary button/i);
    expect(buttonElement).toHaveStyle("background-color: #007bff");
  });

  it("should apply default variant styles", () => {
    render(<Button type="default">Default Button</Button>);
    const buttonElement = screen.getByText(/default button/i);
    expect(buttonElement).toHaveStyle("background-color: #6c757d");
  });
});
