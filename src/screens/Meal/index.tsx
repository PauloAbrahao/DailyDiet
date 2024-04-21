import React from "react";
import {
  Body,
  Container,
  Header,
  PageTitle,
  Icon,
  BackButton,
  MealInfo,
} from "./styles";
import {useNavigation, useRoute} from "@react-navigation/native";
import {MealsCardProps} from "src/@types";

export const Meal = () => {
  const route = useRoute();
  const {title, description, date, time, isOnDiet} =
    route.params as MealsCardProps;

  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon />
        </BackButton>

        <PageTitle bold="bold">Refeição</PageTitle>
      </Header>
      <Body>
        <MealInfo bold="bold" size={20}>
          {title}
        </MealInfo>
        <MealInfo bottom={15} size={16}>
          {description}
        </MealInfo>
        <MealInfo bold="bold" size={14}>
          Data e hora
        </MealInfo>
        <MealInfo bottom={15} size={16}>
          {date} às {time}
        </MealInfo>
        <MealInfo size={14}>
          {isOnDiet ? "dentro da dieta" : "fora da dieta"}
        </MealInfo>
      </Body>
    </Container>
  );
};
