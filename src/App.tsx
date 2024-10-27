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
import { RadioButton } from "./components/RadioButton";
import { ToggleSwitch } from "./components/ToggleSwitch";
import { Tooltip } from "./components/Tooltip";
import { Table } from "./components/Table";
import { SearchBar } from "./components/SearchBar";
import { TabPane, Tabs } from "./components/Tabs";
import { AppThemeProvider } from "./themes";
import ThemeSelector from "./ThemeSelector";
import { MockHeader } from "./components/Header";
import MockCard from "./components/Card/MockCard";

function App() {
  const [isSingleChecked, setIsSingleChecked] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  return (
    <AppThemeProvider>
      <MockHeader />
      <ThemeSelector />
      <MockCard />

      <div style={{ padding: "20px" }}>
        <div style={{ padding: "20px" }}>
          {/* Button Component */}
          <Button type="primary">primary button</Button>
          <Button type="default">default button</Button>
          <Button type="text">text button</Button>
          <Button type="link">link button</Button>

          {/* Card Component */}
          <Card
            header="Card Header"
            body={<p>This is the card body content.</p>}
            footer={<Button>Learn More</Button>}
          />
          <Card body={<p>Another card without an image or footer.</p>} />

          {/* Checkbox Component */}
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

          {/* Dropdown Component */}
          <Dropdown
            options={["Option 1", "Option 2", "Option 3"]}
            placeholder="Choose an option"
            onSelect={(value: string) => {
              console.log("Selected value:", value);
            }}
          />

          {/* Form Component */}
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
          {/* Input Component */}
          <Input placeholder="Enter text here" />

          {/* Loading Spinner Component */}
          <LoadingSpinner size="medium" />

          {/* Menu Component */}
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

          {/* Notification Component */}
          <Notification
            type="info"
            message="Information notification"
            onClose={() => console.log("closed")}
          />

          {/* Pagination Component */}
          <Pagination totalPages={5} currentPage={2} onPageChange={() => {}} />

          {/* Radio Button Component */}
          <RadioButton label="Option 1" isChecked={false} onChange={() => {}} />

          {/* Search Input Component */}
          <SearchBar
            placeholder="Search here..."
            onSearch={(value: string) => {
              console.log("Search value:", value);
            }}
          />

          {/* Toggle Switch Component */}
          <ToggleSwitch size="medium" isChecked={false} onChange={() => {}} />

          {/* Tooltip Component */}
          <Tooltip position="top" content="Tooltip Text">
            Hover over me
          </Tooltip>

          {/* Tabs Component */}
          <Tabs>
            <TabPane label="Tab 1">
              <p>This is the content of Tab 1.</p>
            </TabPane>
            <TabPane label="Tab 2">
              <p>This is the content of Tab 2.</p>
            </TabPane>
          </Tabs>

          {/* Table Component */}
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
        </div>
      </div>
    </AppThemeProvider>
  );
}

export default App;
