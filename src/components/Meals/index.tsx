import React from "react";

import {Container, Title} from "./styles";
import {Button} from "@components/Button";
import {useNavigation} from "@react-navigation/native";

export const Meals = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Title>Refeições</Title>
      <Button
        title="Nova refeição"
        onPress={() => navigation.navigate("newMeal", {})}
      />
    </Container>
  );
};
