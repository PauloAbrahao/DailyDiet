import styled, {css} from "styled-components";
import {View, Text, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {ArrowLeft} from "phosphor-react-native";

export const Container = styled(View)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
`;

export const Header = styled(SafeAreaView)<{percentage: number}>`
  height: 180px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme, percentage}) =>
    percentage >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  flex-direction: column;
`;

export const Percentage = styled(Text)`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XL2}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Title = styled(Text)<{bold?: string; bottom?: number}>`
  ${({theme, bold}) => css`
    font-size: ${theme.FONT_SIZE.SM2}px;
    font-family: ${bold ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `};
  top: 5px;
  margin-bottom: ${({bottom}) => (bottom ? bottom : 0)}px;
`;

export const Body = styled(View)`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  border-radius: 20px 20px 0 0;
  padding-top: 35px;
`;

export const Row = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`;

export const BackButton = styled(TouchableOpacity)`
  position: absolute;
  top: 60px;
  left: 20px;
`;

export const Icon = styled(ArrowLeft).attrs(({theme}) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))``;
