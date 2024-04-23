import styled, {css} from "styled-components";
import {Text, TouchableOpacity, View} from "react-native";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  height: 60px;
  align-items: center;
  padding: 15px;
  margin: 5px 0;
`;

export const Time = styled(Text)`
  font-size: ${({theme}) => theme.FONT_SIZE.SM2}px;
  font-weight: bold;
`;

export const Title = styled(Text)`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
  `};
  width: 60%;
`;

export const Separator = styled(View)`
  width: 1px;
  height: 14px;
  margin: 0 13px;
  background-color: ${({theme}) => theme.COLORS.GRAY_4};
`;

export const Index = styled(View)<{isOnDiet: boolean}>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  position: absolute;
  right: 15px;
  background-color: ${({theme, isOnDiet}) => isOnDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
