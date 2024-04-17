import styled from "styled-components";
import {View, Text} from "react-native";
import {ArrowUpRight} from "phosphor-react-native";

export const Container = styled(View)`
  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
  width: 100%;
  height: 120px;
  top: 50px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 8px;
`;

export const Percentage = styled(Text)`
  font-size: ${({theme}) => theme.FONT_SIZE.XL2}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.GRAY_1};
`;

export const Title = styled(Text)`
  font-size: ${({theme}) => theme.FONT_SIZE.SM2}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) => theme.COLORS.GRAY_1};
`;

export const Icon = styled(ArrowUpRight).attrs(({theme}) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))`
position: absolute;
  right: 9px;
  top: 9px;
  align-self: center;
`;
