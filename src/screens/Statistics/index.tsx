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
import {countConsecutiveDietMeals} from "@commons/helpers/countConsecutiveDietMeals";
import {countTotalMeals} from "@commons/helpers/countTotalMeals";
import {countDietMeals} from "@commons/helpers/countDietMeals";
import {countNonDietMeals} from "@commons/helpers/countNonDietMeals";

export const Statistics = () => {
  const navigation = useNavigation();
  const [consecutiveMeal, setConsecutiveMeal] = React.useState<number>(0);
  const [totalMeals, setTotalMeals] = React.useState<number>(0);
  const [inDiet, setInDiet] = React.useState<number>(0);
  const [offDiet, setOffDiet] = React.useState<number>(0);
  const route = useRoute();
  const {percentage} = route.params as StatisticsProps;

  React.useEffect(() => {
    const fetchConsecutiveMeals = async () => {
      const consecutiveMeals = await countConsecutiveDietMeals();
      const totalMeals = await countTotalMeals();
      const dietMeals = await countDietMeals();
      const nonDietMeals = await countNonDietMeals();

      setConsecutiveMeal(consecutiveMeals);
      setTotalMeals(totalMeals);
      setInDiet(dietMeals);
      setOffDiet(nonDietMeals);
    };

    fetchConsecutiveMeals();
  }, []);

  return (
    <Container>
      <Header percentage={percentage}>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon />
        </BackButton>
        <Percentage>{percentage}%</Percentage>
        <Title>das refeições dentro da dieta</Title>
      </Header>
      <Body>
        <Title bold="bold" bottom={10}>
          Estatísticas gerais
        </Title>
        <Card
          color="GRAY_7"
          title={consecutiveMeal.toString()}
          subtitle="melhor sequência de pratos dentro da dieta"
        />
        <Card
          color="GRAY_7"
          title={totalMeals.toString()}
          subtitle="refeições registradas"
        />
        <Row>
          <Card
            color="GREEN_LIGHT"
            title={inDiet.toString()}
            subtitle="refeições dentro da dieta"
            width={48}
            height={120}
          />
          <Card
            color="RED_LIGHT"
            title={offDiet.toString()}
            subtitle="refeições fora da dieta"
            width={48}
            height={120}
          />
        </Row>
      </Body>
    </Container>
  );
};
