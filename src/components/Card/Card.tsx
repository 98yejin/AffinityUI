import React, { FC, ReactNode } from "react";
import {
  CardContainer,
  CardHeader,
  CardBody,
  CardFooter,
  CardImage,
} from "./Card.styles";

interface CardProps {
  header?: string | ReactNode;
  body: ReactNode;
  footer?: ReactNode;
  imageUrl?: string;
}

const Card: FC<CardProps> = ({ header, body, footer, imageUrl }) => {
  return (
    <CardContainer>
      {imageUrl && <CardImage src={imageUrl} alt="Card Image" />}
      {header && <CardHeader>{header}</CardHeader>}
      <CardBody>{body}</CardBody>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardContainer>
  );
};

export default Card;
