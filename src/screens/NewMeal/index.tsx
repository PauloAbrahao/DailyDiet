import React from "react";
import {Body, Container, Header, Title, Icon, BackButton} from "./styles";
import {useNavigation, useRoute} from "@react-navigation/native";
import {Forms} from "@components/Forms";
import {Meal} from "src/@types";

export const NewMeal = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {id, name, description, date, time, isOnDiet} =
    (route?.params as Meal) || {};

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon />
        </BackButton>

        <Title bold="bold">{id ? "Editar refeição" : "Nova refeição"}</Title>
      </Header>
      <Body>
        <Forms
          id_props={id}
          name_props={name}
          description_props={description}
          date_props={date}
          time_props={time}
          isOnDiet_props={isOnDiet}
        />
      </Body>
    </Container>
  );
};
