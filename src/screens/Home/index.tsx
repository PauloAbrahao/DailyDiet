import React from "react";

import {Container} from "./styles";
import {Header} from "./components/Header";
import {PercentageCard} from "@components/PercentageCard";
import {Meals} from "@components/Meals";
import { MealsList } from "@components/MealsList";

export const Home = () => {
  return (
    <Container>
      <Header />
      <PercentageCard />
      <Meals />
      <MealsList />
    </Container>
  );
};
