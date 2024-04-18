import styled, {css} from "styled-components";
import {Text, TextInput, TouchableOpacity, View} from "react-native";

export const Container = styled(View)`
  width: 90%;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;

export const LabelAndInput = styled(View)<{width?: number}>`
  width: ${({width}) => (width ? width : 100)}%;
`;

export const Label = styled(Text)`
  color: ${({theme}) => theme.COLORS.GRAY_2};
  font-size: ${({theme}) => theme.FONT_SIZE.SM2}px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const DateTime = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonsContainer = styled(View)`
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled(TouchableOpacity) <{ width?: number }>`
  background-color: ${({theme}) => theme.COLORS.GRAY_6};
  height: 50px;
  border-radius: 6px;
  width: ${({width}) => (width ? width : 100)}%;
`;

export const InputArea = styled(TextInput)<{
  multiline?: boolean;
  numberOfLines?: number;
}>`
  height: ${({multiline}) => (multiline ? 150 : 50)}px;
  border-radius: 6px;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_5};
  padding: 10px;
`;
