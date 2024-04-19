import styled, {ThemeType, css} from "styled-components";
import {Text, View} from "react-native";
import {CardStyleProps} from "src/@types";

const handleCardColor = (theme: ThemeType, color: string | undefined) => {
  if (color === "GREEN_LIGHT") {
    return theme.COLORS.GREEN_LIGHT;
  } else if (color === "RED_LIGHT") {
    return theme.COLORS.RED_LIGHT;
  } else {
    return theme.COLORS.GRAY_7;
  }
};

export const Container = styled(View)<CardStyleProps>`
  margin-top: 15px;
  width: ${({width}) => (width ? width : 90)}%;
  height: ${({height}) => (height ? height : 100)}px;
  border-radius: 8px;
  background-color: ${({theme, color}) => handleCardColor(theme, color)};
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Title = styled(Text)`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Subtitle = styled(Text)`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM2}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `};
  text-align: center;
  padding: 0 15px;
`;
