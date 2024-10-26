import React from "react";
import { Accordion, AccordionPanel } from "./components/Accordion";

const App: React.FC = () => {
  return (
    <div>
      <Accordion multiExpand={true}>
        <AccordionPanel title="Panel 1">
          <p>This is the content of Panel 1.</p>
        </AccordionPanel>
        <AccordionPanel title="Panel 2">
          <p>This is the content of Panel 2.</p>
        </AccordionPanel>
        <AccordionPanel title="Panel 3">
          <p>This is the content of Panel 3.</p>
        </AccordionPanel>
      </Accordion>
    </div>
  );
};

export default App;
