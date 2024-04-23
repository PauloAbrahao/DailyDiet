import React from "react";
import {
  Body,
  Container,
  Header,
  PageTitle,
  Icon,
  BackButton,
  MealInfo,
  Index,
  ButtonContainer,
  TypeContainer,
} from "./styles";
import {useNavigation, useRoute} from "@react-navigation/native";
import {MealsCardProps} from "src/@types";
import {Button} from "@components/Button";
import {removeMeal} from "@storage/meal/removeMeal";
import {Modal} from "@components/Modal";

export const Meal = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [showModal, setShowModal] = React.useState(false);
  const {id, title, description, date, time, isOnDiet} =
    route.params as MealsCardProps;

  const handleEditMeal = () => {
    navigation.navigate("newMeal", {
      id,
      name: title,
      description,
      date,
      time,
      isOnDiet,
    });
  };

  const handleRemoveMeal = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleConfirmDelete = async () => {
    await removeMeal(id);
    setShowModal(false);
    navigation.goBack();
  };

  return (
    <Container isOnDiet={isOnDiet}>
      <Header isOnDiet={isOnDiet}>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon />
        </BackButton>

        <PageTitle bold="bold">Refeição</PageTitle>
      </Header>
      <Body>
        <MealInfo bold="bold" size={20}>
          {title}
        </MealInfo>
        <MealInfo bottom={15} size={16}>
          {description}
        </MealInfo>
        <MealInfo bold="bold" size={14}>
          Data e hora
        </MealInfo>
        <MealInfo bottom={15} size={16}>
          {date} às {time}
        </MealInfo>

        <TypeContainer size={14} background={true}>
          <Index isOnDiet={isOnDiet} />
          <MealInfo size={14} background={true}>
            {isOnDiet ? "dentro da dieta" : "fora da dieta"}
          </MealInfo>
        </TypeContainer>
      </Body>
      <ButtonContainer>
        <Button title="Editar refeição" onPress={handleEditMeal} icon="edit" />
        <Button
          title="Excluir refeição"
          onPress={handleRemoveMeal}
          icon="trash"
          buttonColor="transparent"
          selectedColor="GRAY_1"
          isSelected={true}
        />
      </ButtonContainer>

      {showModal && (
        <Modal onCancel={handleCancel} onRemove={handleConfirmDelete} />
      )}
    </Container>
  );
};
