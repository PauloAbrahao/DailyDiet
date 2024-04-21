import React, {useCallback} from "react";
import {Container, Date, Label} from "./styles";
import {Alert, SectionList} from "react-native";
import {MealsCard} from "@components/MealCard";
import {mealsGetAll} from "@storage/meal/mealsGetAll";
import {useFocusEffect} from "@react-navigation/native";
import { Meal, MealSection } from "src/@types";

export const MealsList = () => {
  const [meals, setMeals] = React.useState<MealSection[]>([]);

  async function fetchMeals() {
    try {
      const data: Meal[] = await mealsGetAll();

      const groupedMeals: {[key: string]: Meal[]} | MealSection[] = {};
      data.forEach((meal) => {
        if (!groupedMeals[meal.date]) {
          groupedMeals[meal.date] = [];
        }
        groupedMeals[meal.date].push(meal);
      });

      const sectionData: MealSection[] = Object.keys(groupedMeals).map(
        (date) => ({
          date: date,
          data: groupedMeals[date],
    
        })
      );

      setMeals(sectionData);
    } catch (error) {
      Alert.alert("Refeições", "Não foi possível carregar suas refeições.");
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <SectionList
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        sections={meals}
        keyExtractor={(item, index) => item.date + index}
        renderItem={({item}) => (
          <MealsCard
            title={item.name}
            description={item.description}
            date={item.date}
            time={item.time}
            isOnDiet={item.isOnDiet}
          />
        )}
        renderSectionHeader={({section: {date}}) => <Date>{date}</Date>}
        ListEmptyComponent={() => (
          <Label>Ainda não há refeições cadastradas.</Label>
        )}
      />
    </Container>
  );
};
