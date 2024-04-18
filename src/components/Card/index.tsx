import React from "react";
import {Container, Subtitle, Title} from "./styles";
import {CardProps} from "src/@types";

export const Card = ({title, subtitle, color, width, height}: CardProps) => {
  return (
    <Container color={color} width={width} height={height}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};
