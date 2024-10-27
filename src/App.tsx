import React, { useState } from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Checkbox, CheckboxGroup } from "./components/Checkbox";
import { Dropdown } from "./components/Dropdown";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { Menu } from "./components/Menu";
import { Notification } from "./components/Notification";
import { Pagination } from "./components/Pagination";
import { RadioButtonGroup } from "./components/RadioButton";
import { ToggleSwitch } from "./components/ToggleSwitch";
import { Tooltip } from "./components/Tooltip";
import { Table } from "./components/Table";
import { SearchBar } from "./components/SearchBar";
import { TabPane, Tabs } from "./components/Tabs";
import { AppThemeProvider } from "./themes";
import ThemeSelector from "./ThemeSelector";
import { MockHeader } from "./components/Header";
import MockCard from "./components/Card/MockCard";
import CompanyPrinciples from "./components/CompanyPrinciple";
import { Layout } from "./components/Layout";
import { Space } from "./components/Space";
import { HeaderText } from "./components/Typography";

function App() {
  const [isSingleChecked, setIsSingleChecked] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [isToggled, setIsToggled] = useState(false);
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };
  return (
    <AppThemeProvider>
      <Layout style={{ overflow: "auto" }}>
        <MockHeader />
        <CompanyPrinciples />
        <ThemeSelector />
        <MockCard />
        <Space style={{ padding: "20px" }} direction="vertical">
          <HeaderText level={2}>Components</HeaderText>
          <HeaderText level={3}>Button</HeaderText>
          <Space direction="horizontal">
            <Button type="primary">primary button</Button>
            <Button type="default">default button</Button>
            <Button type="text">text button</Button>
            <Button type="link">link button</Button>
          </Space>
          <HeaderText level={3}>Card</HeaderText>
          <Card
            header="Card Header"
            body={<p>This is the card body content.</p>}
            footer={
              <Button
                type="primary"
                onClick={() => window.open("https://www.google.com", "_blank")}
              >
                Learn More
              </Button>
            }
          />
          <Card body={<p>Another card without an image or footer.</p>} />
          <HeaderText level={3}>Checkbox</HeaderText>
          <Checkbox
            label="Single Checkbox"
            isChecked={isSingleChecked}
            onChange={() => setIsSingleChecked((prev) => !prev)}
          />
          <CheckboxGroup
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
            ]}
            selectedValues={selectedValues}
            onChange={setSelectedValues}
          />
          <HeaderText level={3}>Dropdown</HeaderText>
          <Dropdown
            options={["Option 1", "Option 2", "Option 3"]}
            placeholder="Choose an option"
            onSelect={(value: string) => {
              console.log("Selected value:", value);
            }}
          />
          <HeaderText level={3}>Form</HeaderText>
          <Form
            fields={[
              {
                name: "username",
                label: "Username",
                type: "text",
                required: true,
              },
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
            onSubmit={(formData: { [key: string]: string }) => {
              console.log("Form submitted:", formData);
            }}
          />
          <HeaderText level={3}>Input</HeaderText>
          <Input placeholder="Enter text here" />
          <HeaderText level={3}>LoadingSpinner</HeaderText>
          <LoadingSpinner size="medium" />
          <HeaderText level={3}>Menu</HeaderText>
          <Menu
            menuItems={[
              {
                label: "Home",
                key: "home",
              },
              {
                label: "Services",
                key: "services",
                items: [
                  { label: "Consulting", key: "consulting" },
                  { label: "Development", key: "development" },
                  { label: "Design", key: "design" },
                ],
              },
            ]}
            onSelect={(key: string) => {
              console.log(`Selected: ${key}`);
            }}
          />
          <HeaderText level={3}>Notification</HeaderText>
          <Notification
            type="info"
            message="Information notification"
            onClose={() => console.log("closed")}
          />
          <HeaderText level={3}>Pagination</HeaderText>
          <Pagination totalPages={5} currentPage={2} onPageChange={() => {}} />
          <HeaderText level={3}>RadioButton</HeaderText>
          <RadioButtonGroup
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2", disabled: true },
              { label: "Option 3", value: "option3" },
            ]}
            selectedValue={selectedValue}
            onChange={setSelectedValue}
          />
          <HeaderText level={3}>SearchBar</HeaderText>
          <SearchBar
            placeholder="Search here..."
            onSearch={(value: string) => {
              console.log("Search value:", value);
            }}
          />
          <HeaderText level={3}>ToggleSwitch</HeaderText>
          <ToggleSwitch
            size="medium"
            isChecked={isToggled}
            onChange={handleToggle}
          />
          <HeaderText level={3}>Tooltip</HeaderText>
          <Tooltip position="top" content="Tooltip Text">
            Hover over me
          </Tooltip>
          <HeaderText level={3}>Tabs</HeaderText>
          <Tabs>
            <TabPane label="Tab 1">
              <p>This is the content of Tab 1.</p>
            </TabPane>
            <TabPane label="Tab 2">
              <p>This is the content of Tab 2.</p>
            </TabPane>
          </Tabs>
          <HeaderText level={3}>Table</HeaderText>
          <Table
            columns={[
              { key: "name", label: "Name" },
              { key: "age", label: "Age" },
            ]}
            data={[
              { name: "John Doe", age: 28 },
              { name: "Jane Smith", age: 34 },
            ]}
            rowsPerPage={5}
          />
        </Space>
      </Layout>
    </AppThemeProvider>
  );
}

export default App;
