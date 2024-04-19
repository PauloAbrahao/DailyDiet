import React from "react";
import {
  Body,
  Container,
  Header,
  Percentage,
  Row,
  Title,
  Icon,
  BackButton,
} from "./styles";
import {StatisticsProps} from "src/@types";
import {useNavigation, useRoute} from "@react-navigation/native";
import {Card} from "@components/Card";

export const Statistics = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {percentage} = route.params as StatisticsProps;

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon />
        </BackButton>
        <Percentage>{percentage}</Percentage>
        <Title>das refeições dentro da dieta</Title>
      </Header>
      <Body>
        <Title bold="bold" bottom={10}>
          Estatísticas gerais
        </Title>
        <Card
          color="GRAY_7"
          title="22"
          subtitle="melhor sequência de pratos dentro da dieta"
        />
        <Card color="GRAY_7" title="109" subtitle="refeições registradas" />
        <Row>
          <Card
            color="GREEN_LIGHT"
            title="99"
            subtitle="refeições dentro da dieta"
            width={48}
            height={120}
          />
          <Card
            color="RED_LIGHT"
            title="10"
            subtitle="refeições fora da dieta"
            width={48}
            height={120}
          />
        </Row>
      </Body>
    </Container>
  );
};
