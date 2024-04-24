import React, {useCallback} from "react";

import {Container, Percentage, Title, Icon} from "./styles";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {Meal} from "src/@types";
import {mealsGetAll} from "@storage/meal/mealsGetAll";

export const PercentageCard = () => {
  const navigation = useNavigation();
  const [percentage, setPercentage] = React.useState<number>(0);

  useFocusEffect(
    useCallback(() => {
      const calculateDietPercentage = async () => {
        try {
          const storedMeals: Meal[] = await mealsGetAll();
          if (storedMeals.length === 0) {
            setPercentage(0);
            return;
          }

          const totalMeals = storedMeals.length;
          const dietMeals = storedMeals.filter((meal) => meal.isOnDiet).length;

          const dietPercentage = (dietMeals / totalMeals) * 100;
          setPercentage(parseFloat(dietPercentage.toFixed(2)));
        } catch (error) {
          console.error("Error calculating diet percentage:", error);
        }
      };

      calculateDietPercentage();
    }, [])
  );

  return (
    <Container
      percentage={percentage}
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate("statistics", {
          percentage,
        })
      }
    >
      <Icon percentage={percentage}/>
      <Percentage>{percentage}%</Percentage>
      <Title>das refeições dentro da dieta</Title>
    </Container>
  );
};
