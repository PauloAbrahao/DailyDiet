import React from "react";
import {Body, Container, Header, Title, Icon, BackButton} from "./styles";
import {useNavigation} from "@react-navigation/native";
import {Forms} from "@components/Forms";

export const NewMeal = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon />
        </BackButton>

        <Title bold="bold">Nova refeição</Title>
      </Header>
      <Body>
        <Forms />
      </Body>
    </Container>
  );
};
