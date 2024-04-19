import styled, {css} from "styled-components";
import {View, Text} from "react-native";

export const Container = styled(View)`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.GRAY_7};
  gap: 15px;
`;

export const Title = styled(Text)<{isOnDiet?: boolean}>`
  font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
  color: ${({theme, isOnDiet}) =>
    isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  font-weight: bold;
`;

export const Subtitle = styled(Text)`
  color: ${({theme}) => theme.COLORS.GRAY_1};
  width: 75%;
  text-align: center;
`;

export const Image = styled(View)`
  margin-top: 30px;
`;

export const ButtonArea = styled(View)`
  margin-top: 30px;
  width: 52%;
`;
