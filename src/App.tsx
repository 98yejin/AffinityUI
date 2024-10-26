import React from "react";
import { TabPane, Tabs } from "./components/Tabs";

const App: React.FC = () => {
  return (
    <div>
      <Tabs>
        <TabPane label="Tab 1">
          <p>This is the content of Tab 1.</p>
        </TabPane>
        <TabPane label="Tab 2">
          <p>This is the content of Tab 2.</p>
        </TabPane>
        <TabPane
          label={<span style={{ color: "green" }}>Custom Styled Tab</span>}
        >
          <p>This tab has a custom styled label.</p>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default App;
