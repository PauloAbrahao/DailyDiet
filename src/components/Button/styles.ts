import styled, {css} from "styled-components";
import {TouchableOpacity, Text, View} from "react-native";
import {Plus} from "phosphor-react-native";

export const Container = styled(TouchableOpacity)<{color?: string}>`
  width: 100%;
  flex-direction: row;
  background-color: ${({color, theme}) =>
    color === "GRAY_6" ? theme.COLORS.GRAY_6 : theme.COLORS.GRAY_2};
  border-radius: 6px;
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
