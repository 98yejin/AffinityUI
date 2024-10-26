import React, { FC, useState, ReactNode } from "react";
import {
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "./Accordion.styles";

interface AccordionProps {
  children: ReactNode;
  multiExpand?: boolean; // Allow multiple panels to be open at once
}

interface AccordionPanelProps {
  title: string | ReactNode;
  children: ReactNode;
}

export const AccordionPanel: FC<AccordionPanelProps> = ({
  title,
  children,
}) => {
  return <>{children}</>;
};

const Accordion: FC<AccordionProps> = ({ children, multiExpand = false }) => {
  const [openPanels, setOpenPanels] = useState<number[]>([]);

  const handlePanelClick = (index: number) => {
    if (multiExpand) {
      if (openPanels.includes(index)) {
        setOpenPanels(openPanels.filter((i) => i !== index));
      } else {
        setOpenPanels([...openPanels, index]);
      }
    } else {
      setOpenPanels(openPanels.includes(index) ? [] : [index]);
    }
  };

  const panels = React.Children.toArray(
    children
  ) as React.ReactElement<AccordionPanelProps>[];

  return (
    <AccordionContainer>
      {panels.map((panel, index) => (
        <AccordionItem key={index}>
          <AccordionHeader onClick={() => handlePanelClick(index)}>
            {panel.props.title}
          </AccordionHeader>
          {openPanels.includes(index) && (
            <AccordionContent>{panel.props.children}</AccordionContent>
          )}
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;
