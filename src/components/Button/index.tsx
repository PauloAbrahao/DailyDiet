import React from "react";

import {Container, Title, Icon} from "./styles";
import {ButtonProps} from "src/@types";

export const Button = ({title}: ButtonProps) => {
  return (
    <Container activeOpacity={0.7}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
};
