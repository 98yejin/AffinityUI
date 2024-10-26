import React, { FC, useState, ReactNode } from "react";
import { Tab, TabContent, TabsContainer, TabsHeader } from "./Tabs.styles";

interface TabsProps {
  children: ReactNode;
}

interface TabPaneProps {
  label: string | ReactNode;
  children: ReactNode;
}

export const TabPane: FC<TabPaneProps> = ({ children }) => {
  return <>{children}</>;
};

const Tabs: FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabPanes = React.Children.toArray(
    children
  ) as React.ReactElement<TabPaneProps>[];

  return (
    <TabsContainer>
      <TabsHeader>
        {tabPanes.map((pane, index) => (
          <Tab
            key={index}
            active={index === activeTab}
            onClick={() => handleTabClick(index)}
          >
            {pane.props.label}
          </Tab>
        ))}
      </TabsHeader>
      <TabContent>{tabPanes[activeTab]}</TabContent>
    </TabsContainer>
  );
};

export default Tabs;
