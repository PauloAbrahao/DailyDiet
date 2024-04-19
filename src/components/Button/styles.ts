import styled, {ThemeType, css} from "styled-components";
import {TouchableOpacity, Text, View} from "react-native";
import {Plus} from "phosphor-react-native";

const handleButtonColor = (
  theme: ThemeType,
  selectedColor: string | undefined,
  color: string | undefined,
  isSelected: boolean | undefined
) => {
  if (isSelected && selectedColor === "GREEN_LIGHT") {
    return theme.COLORS.GREEN_LIGHT;
  } else if (isSelected && selectedColor === "RED_LIGHT") {
    return theme.COLORS.RED_LIGHT;
  }
  if (color === "GRAY_6") {
    return theme.COLORS.GRAY_6;
  } else {
    return theme.COLORS.GRAY_2;
  }
};

const handleBorderColor = (
  theme: ThemeType,
  selectedColor: string | undefined,
  isSelected: boolean | undefined
) => {
  if (isSelected && selectedColor === "GREEN_LIGHT") {
    return theme.COLORS.GREEN_DARK;
  } else if (isSelected && selectedColor === "RED_LIGHT") {
    return theme.COLORS.RED_DARK;
  }
  return;
};

export const Container = styled(TouchableOpacity)<{
  color?: string;
  isSelected?: boolean;
  selectedColor?: string;
}>`
  width: 100%;
  flex-direction: row;
  border-radius: 6px;
  border-style: solid;

  background-color: ${({color, theme, selectedColor, isSelected}) =>
    handleButtonColor(theme, selectedColor, color, isSelected)};
  border-width: ${({selectedColor, isSelected}) =>
    isSelected && selectedColor ? 1 : 0}px;
  border-color: ${({theme, selectedColor, isSelected}) =>
    handleBorderColor(theme, selectedColor, isSelected)};

  height: 60px;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Title = styled(Text)<{color?: string}>`
  ${({color, theme}) => css`
    color: ${color ? theme.COLORS.GRAY_1 : theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM2}px;
  `};
  font-weight: bold;
`;

export const ButtonIcon = styled(View)<{color?: string}>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({color, theme}) =>
    color === "GREEN_DARK" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const PlusIcon = styled(Plus).attrs(({theme}) => ({
  size: 19,
  color: theme.COLORS.WHITE,
}))`
  align-items: center;
`;
