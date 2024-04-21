import React from "react";

import {Container, Index, Separator, Time, Title} from "./styles";
import {MealsCardProps} from "src/@types";
import {useNavigation} from "@react-navigation/native";

export const MealsCard = ({
  title,
  description,
  date,
  time,
  isOnDiet,
}: MealsCardProps) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("meal", {
      title: title,
      description: description,
      date: date,
      time: time,
      isOnDiet: isOnDiet,
    });
  };

  return (
    <Container onPress={handleNavigation}>
      <Time>{time}</Time>
      <Separator />
      <Title numberOfLines={1}>{title}</Title>
      <Index isOnDiet={isOnDiet} />
    </Container>
  );
};
