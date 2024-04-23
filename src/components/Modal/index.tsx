import React from "react";

import {ButtonContainer, Container, ModalContent, Title} from "./styles";
import {Button} from "@components/Button";
import {ModalProps} from "src/@types";

export const Modal = ({onCancel, onRemove}: ModalProps) => {
  return (
    <Container>
      <ModalContent>
        <Title>Deseja realmente excluir o registro da refeição?</Title>
        <ButtonContainer>
          <Button
            title="Cancelar"
            onPress={onCancel}
            isSelected
            selectedColor="GRAY_1"
            buttonColor="transparent"
            icon="none"
          />
          <Button
            title="Sim, excluir"
            onPress={onRemove}
            isSelected
            selectedColor="GRAY_1"
            icon="none"
          />
        </ButtonContainer>
      </ModalContent>
    </Container>
  );
};
