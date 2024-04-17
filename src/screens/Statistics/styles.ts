import styled, {css} from "styled-components";
import {View, Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export const Container = styled(View)`
  flex: 1;
`;

export const Header = styled(SafeAreaView)`
  height: 190px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  flex-direction: column;
`;

export const Percentage = styled(Text)`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XL2}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Title = styled(Text)`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM2}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `};
  top: 5px;
`;
