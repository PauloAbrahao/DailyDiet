import React from "react";
import {Container, Header, Percentage, Title} from "./styles";
import {StatisticsProps} from "src/@types";
import {useRoute} from "@react-navigation/native";

export const Statistics = () => {
  const route = useRoute();
  const {percentage} = route.params as StatisticsProps;

  return (
    <Container>
      <Header>
        <Percentage>{percentage}</Percentage>
        <Title>das refeições dentro da dieta</Title>
      </Header>
    </Container>
  );
};
