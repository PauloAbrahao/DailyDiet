import React from "react";

import {Container, Percentage, Title, Icon} from "./styles";
import {useNavigation} from "@react-navigation/native";

export const PercentageCard = () => {
  const navigation = useNavigation();
  const [percentage, setPercentage] = React.useState<string>("90,86%");

  return (
    <Container
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate("statistics", {
          percentage,
        })
      }
    >
      <Icon />
      <Percentage>{percentage}</Percentage>
      <Title>das refeições dentro da dieta</Title>
    </Container>
  );
};
