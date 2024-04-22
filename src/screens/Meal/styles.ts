import styled, {css} from "styled-components";
import {View, Text, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {ArrowLeft} from "phosphor-react-native";

export const Container = styled(View)<{isOnDiet?: boolean}>`
  flex: 1;
  background-color: ${({theme, isOnDiet}) =>
    isOnDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const ButtonContainer = styled(View)`
  flex: 1;
  gap: 15px;
  width: 100%;
  padding: 0 25px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  justify-content: flex-end;
  padding-bottom: 40px;
`;

export const Header = styled(SafeAreaView)<{isOnDiet?: boolean}>`
  height: 100px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme, isOnDiet}) =>
    isOnDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  flex-direction: row;
`;

export const PageTitle = styled(Text)<{bold?: string; bottom?: number}>`
  ${({theme, bold}) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${bold ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `};
  top: 5px;
  margin-bottom: ${({bottom}) => (bottom ? bottom : 0)}px;
`;

export const Body = styled(View)`
  flex: 1;
  gap: 5px;
  flex-direction: column;
  align-items: left;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  border-radius: 20px 20px 0 0;
  padding-left: 25px;
  padding-top: 35px;
`;

export const BackButton = styled(TouchableOpacity)`
  position: absolute;
  top: 55px;
  left: 20px;
`;

export const Icon = styled(ArrowLeft).attrs(({theme}) => ({
  size: 24,
  color: theme.COLORS.GRAY_2,
}))``;

export const TypeContainer = styled(View)<{
  isOnDiet?: boolean;
  background?: boolean;
  size?: number;
}>`
  ${({theme, background}) => css`
    background-color: ${background ? theme.COLORS.GRAY_6 : "transparent"};
    width: ${background ? "160px" : "auto"};
    text-align: ${background ? "auto" : "left"};
    padding: ${background ? "9px 15px" : 0};
    border-radius: ${background ? 65 : 0}px;
  `};
  justify-content: center;
  text-align: center;
  margin-top: 15px;
`;

export const MealInfo = styled(Text)<{
  bold?: string;
  bottom?: number;
  size?: number;
  background?: boolean;
}>`
  ${({theme, bold, size, background, bottom}) => css`
    font-size: ${size ? size : theme.FONT_SIZE.LG}px;
    font-family: ${bold ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
    margin-bottom: ${bottom ? bottom : 0}px;
    left: ${background ? 15 : 0}px;
    top: ${background ? 0 : 5}px;
  `};
  position: relative;
`;

export const Index = styled(View)<{isOnDiet: boolean}>`
  width: 8px;
  height: 8px;
  left: 15px;
  border-radius: 7px;
  position: absolute;
  background-color: ${({theme, isOnDiet}) =>
    isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
