import React from "react";

import {
  Container,
  Title,
  PlusIcon,
  ButtonIcon,
  EditIcon,
  TrashIcon,
} from "./styles";
import {ButtonProps} from "src/@types";

export const Button = ({
  title,
  onPress,
  icon,
  buttonColor,
  iconColor,
  selectedColor,
  isSelected,
}: ButtonProps) => {
  const handleIcon = () => {
    if (icon === "circle") {
      return <ButtonIcon color={iconColor} />;
    } else if (icon === "trash") {
      return <TrashIcon />;
    } else if (icon === "edit") {
      return <EditIcon />;
    } else if (icon === "none") {
      return;
    } else {
      return <PlusIcon />;
    }
  };

  return (
    <Container
      activeOpacity={0.7}
      onPress={onPress}
      color={buttonColor}
      isSelected={isSelected}
      selectedColor={selectedColor}
    >
      {handleIcon()}
      <Title color={buttonColor}>{title}</Title>
    </Container>
  );
};
