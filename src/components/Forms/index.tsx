import React from "react";
import {
  Container,
  Label,
  InputArea,
  LabelAndInput,
  DateTime,
  ButtonsContainer,
  RegisterMeal,
  AreaToScroll,
} from "./styles";
import {Button} from "@components/Button";
import {useNavigation} from "@react-navigation/native";
import {createMeal} from "@storage/meal/createMeal";
import {FormProps} from "src/@types";
import {editMeal} from "@storage/meal/editMeal";

export const Forms = ({
  id_props,
  name_props,
  description_props,
  date_props,
  time_props,
  isOnDiet_props,
}: FormProps) => {
  const navigation = useNavigation();

  const [name, setName] = React.useState<string>("" || name_props);
  const [description, setDescription] = React.useState<string>(
    "" || description_props
  );
  const [date, setDate] = React.useState<string>("" || date_props);
  const [time, setTime] = React.useState<string>("" || time_props);
  const [isOnDiet, setIsOnDiet] = React.useState<boolean | null>(
    null || isOnDiet_props
  );
  const [error, setError] = React.useState<string | null>("");

  const handleAdd = async () => {
    if (
      name.trim().length > 0 &&
      description.trim().length > 0 &&
      date.trim().length > 0 &&
      time.trim().length > 0 &&
      isOnDiet !== null
    ) {
      const id = "_" + Math.random().toString(36).substr(2, 9);

      await createMeal({id, name, description, date, time, isOnDiet});
      navigation.navigate("feedback", {
        isOnDiet: isOnDiet,
      });
    } else {
      setError("Todos os campos devem ser preenchidos.");
    }
  };

  const handleEdit = async () => {
    if (
      name.trim().length > 0 &&
      description.trim().length > 0 &&
      date.trim().length > 0 &&
      time.trim().length > 0 &&
      isOnDiet !== null
    ) {
      await editMeal(
        {
          id_props,
          name_props,
          description_props,
          date_props,
          time_props,
          isOnDiet_props,
        },
        {
          id: id_props,
          name,
          description,
          date,
          time,
          isOnDiet,
        }
      );
      navigation.navigate("feedback", {
        isOnDiet: isOnDiet,
      });
    } else {
      setError("Todos os campos devem ser preenchidos.");
    }
  };

  const handleButton = () => {
    if (
      id_props &&
      name_props &&
      description_props &&
      date_props &&
      time_props &&
      isOnDiet !== null
    ) {
      return "Salvar alterações";
    } else {
      return "Cadastrar refeição";
    }
  };

  return (
    <Container>
      <AreaToScroll
        contentContainerStyle={{
          flexGrow: 1,
          gap: 30,
        }}
      >
        <LabelAndInput>
          <Label>Nome</Label>
          <InputArea value={name} onChangeText={setName} />
        </LabelAndInput>

        <LabelAndInput>
          <Label>Descrição</Label>
          <InputArea
            multiline={true}
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
            textAlignVertical="top"
          />
        </LabelAndInput>

        <DateTime>
          <LabelAndInput width={47}>
            <Label>Data</Label>
            <InputArea value={date} onChangeText={setDate} />
          </LabelAndInput>

          <LabelAndInput width={47}>
            <Label>Hora</Label>
            <InputArea value={time} onChangeText={setTime} />
          </LabelAndInput>
        </DateTime>

        <ButtonsContainer>
          <Label>Está dentro da dieta?</Label>

          <DateTime>
            <LabelAndInput width={48}>
              <Button
                title="Sim"
                onPress={() => setIsOnDiet(true)}
                icon="circle"
                buttonColor="GRAY_6"
                selectedColor="GREEN_LIGHT"
                iconColor="GREEN_DARK"
                isSelected={isOnDiet === true}
              />
            </LabelAndInput>

            <LabelAndInput width={48}>
              <Button
                title="Não"
                onPress={() => setIsOnDiet(false)}
                icon="circle"
                buttonColor="GRAY_6"
                selectedColor="RED_LIGHT"
                iconColor="RED_DARK"
                isSelected={isOnDiet === false}
              />
            </LabelAndInput>
          </DateTime>
        </ButtonsContainer>
        {error && (
          <Label
            style={{color: "red", marginTop: 10}}
            weight="normal"
            align="center"
          >
            {error}
          </Label>
        )}
        <RegisterMeal>
          <Button
            title={handleButton()}
            onPress={id_props ? handleEdit : handleAdd}
            icon="none"
          />
        </RegisterMeal>
      </AreaToScroll>
    </Container>
  );
};
