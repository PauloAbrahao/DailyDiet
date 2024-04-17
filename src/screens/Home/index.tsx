import React from "react";

import {Container} from "./styles";
import {Header} from "./components/Header";
import {PercentageCard} from "@components/PercentageCard";

export const Home = () => {
  return (
    <Container>
      <Header />
      <PercentageCard />
    </Container>
  );
};
