import React from "react";
import {
  Body,
  Container,
  Header,
  PageTitle,
  Icon,
  BackButton,
  MealInfo,
  Index,
  ButtonContainer,
  TypeContainer,
} from "./styles";
import {useNavigation, useRoute} from "@react-navigation/native";
import {MealsCardProps} from "src/@types";
import {Button} from "@components/Button";

export const Meal = () => {
  const route = useRoute();
  const {title, description, date, time, isOnDiet} =
    route.params as MealsCardProps;

  const navigation = useNavigation();
  return (
    <Container isOnDiet={isOnDiet}>
      <Header isOnDiet={isOnDiet}>
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

        <TypeContainer size={14} background={true}>
          <Index isOnDiet={isOnDiet} />
          <MealInfo size={14} background={true}>
            {isOnDiet ? "dentro da dieta" : "fora da dieta"}
          </MealInfo>
        </TypeContainer>
      </Body>
      <ButtonContainer>
        <Button title="Editar refeição" onPress={() => {}} icon="edit" />
        <Button
          title="Excluir refeição"
          onPress={() => {}}
          icon="trash"
          buttonColor="transparent"
          selectedColor="GRAY_1"
          isSelected={true}
        />
      </ButtonContainer>
    </Container>
  );
};
