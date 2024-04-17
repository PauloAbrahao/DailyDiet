import React from "react";

import {Container, Index, Separator, Time, Title} from "./styles";
import {MealsCardProps} from "src/@types";

export const MealsCard = ({time, title}: MealsCardProps) => {
  return (
    <Container>
      <Time>{time}</Time>
      <Separator />
      <Title numberOfLines={1}>{title}</Title>
      <Index />
    </Container>
  );
};
