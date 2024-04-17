import styled, {css} from "styled-components";
import {TouchableOpacity, Text} from "react-native";
import {Plus} from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  background-color: ${({theme}) => theme.COLORS.GRAY_2};
  border-radius: 6px;
  height: 60px;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Title = styled(Text)`
  ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM2}px;
  `};
  font-weight: bold;
`;

export const Icon = styled(Plus).attrs(({theme}) => ({
  size: 19,
  color: theme.COLORS.WHITE,
}))`
  align-items: center;
`;
