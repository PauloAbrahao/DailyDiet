import React from "react";
import {
  Container,
  Label,
  InputArea,
  LabelAndInput,
  DateTime,
  ButtonsContainer,
} from "./styles";
import {Button} from "@components/Button";
// import {NewMealProps} from "src/@types";

export const Forms = () => {
  return (
    <Container>
      <LabelAndInput>
        <Label>Nome</Label>
        <InputArea />
      </LabelAndInput>

      <LabelAndInput>
        <Label>Descrição</Label>
        <InputArea multiline={true} numberOfLines={4} />
      </LabelAndInput>

      <DateTime>
        <LabelAndInput width={47}>
          <Label>Data</Label>
          <InputArea />
        </LabelAndInput>

        <LabelAndInput width={47}>
          <Label>Hora</Label>
          <InputArea />
        </LabelAndInput>
      </DateTime>

      <ButtonsContainer>
        <Label>Está dentro da dieta?</Label>

        <DateTime>
          <LabelAndInput width={48}>
            <Button
              title="Sim"
              onPress={() => {}}
              icon="circle"
              buttonColor="GRAY_6"
              iconColor="GREEN_DARK"
            />
          </LabelAndInput>

          <LabelAndInput width={48}>
            <Button
              title="Não"
              onPress={() => {}}
              icon="circle"
              buttonColor="GRAY_6"
              iconColor="RED_DARK"
            />
          </LabelAndInput>
        </DateTime>
      </ButtonsContainer>
    </Container>
  );
};
