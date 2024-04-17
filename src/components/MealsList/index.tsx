import React from "react";
import {Container, Date} from "./styles";
import {SectionList} from "react-native";
import {MealsCard} from "@components/MealCard";
import {MealSection} from "src/@types";

const DATA: MealSection[] = [
  {
    date: "12.08.22",
    data: [
      {time: "20:00", title: "X-tudo"},
      {time: "16:00", title: "Whey protein com leite"},
      {time: "12:30", title: "Salada cesar com frango grelhado"},
      {time: "09:30", title: "Vitamina de banana com abacate"},
    ],
  },
  {
    date: "11.08.22",
    data: [
      {time: "20:00", title: "X-tudo"},
      {time: "16:00", title: "Whey protein com leite"},
      {time: "12:30", title: "Salada cesar com frango grelhado"},
      {time: "09:30", title: "Vitamina de banana com abacate"},
    ],
  },
];

export const MealsList = () => {
  return (
    <Container>
      <SectionList
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        sections={DATA}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({item}) => (
          <MealsCard time={item.time} title={item.title} />
        )}
        renderSectionHeader={({ section: { date } }) => <Date>{date}</Date>}
      />
    </Container>
  );
};
