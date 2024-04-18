import React from "react";

import {Container, Title, PlusIcon, ButtonIcon} from "./styles";
import {ButtonProps} from "src/@types";

export const Button = ({title, onPress, icon, buttonColor, iconColor}: ButtonProps) => {
  return (
    <Container activeOpacity={0.7} onPress={onPress} color={buttonColor}>
      {icon === "circle" ? <ButtonIcon color={iconColor} /> : <PlusIcon />}
      <Title color={buttonColor}>{title}</Title>
    </Container>
  );
};
