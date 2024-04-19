import React from "react";
import {ButtonArea, Container, Subtitle, Title, Image} from "./styles";
import {useNavigation, useRoute} from "@react-navigation/native";
import {BadIcon, HappyIcon} from "@assets/icons";
import {Button} from "@components/Button";
import {FeedbackProps} from "src/@types";

export const Feedback = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {isOnDiet} = route.params as FeedbackProps;

  const handleNavigate = () => {
    navigation.navigate("home");
  };

  return (
    <Container>
      <Title isOnDiet={isOnDiet}>
        {isOnDiet ? "Continue assim!" : "Que pena!"}
      </Title>

      <Subtitle>
        {isOnDiet
          ? "Você continua dentro da dieta. Muito bem!"
          : "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"}
      </Subtitle>
      <Image>{isOnDiet ? <HappyIcon /> : <BadIcon />}</Image>

      <ButtonArea>
        <Button
          title="Ir para a página inicial"
          icon="none"
          onPress={handleNavigate}
        />
      </ButtonArea>
    </Container>
  );
};
