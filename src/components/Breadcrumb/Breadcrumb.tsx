// Breadcrumb.tsx
import React, { FC } from "react";
import {
  BreadcrumbContainer,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "./Breadcrumb.styles";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
  separator?: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ items, separator = "/" }) => {
  return (
    <BreadcrumbContainer>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index < items.length - 1 ? (
            <BreadcrumbItem href={item.href}>{item.label}</BreadcrumbItem>
          ) : (
            <span style={{ color: "black" }}>{item.label}</span>
          )}
          {index < items.length - 1 && (
            <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
          )}
        </React.Fragment>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
