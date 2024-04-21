import styled, {css} from "styled-components";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export const Container = styled(KeyboardAvoidingView)`
  width: 90%;
`;

export const AreaToScroll = styled(ScrollView)`
  width: 100%;
  height: 100%;
`;

export const LabelAndInput = styled(View)<{width?: number}>`
  width: ${({width}) => (width ? width : 100)}%;
`;

export const Label = styled(Text) <{ weight?: string;  align?: string}>`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.SM2}px;
  `};
  text-align: ${({align}) => (align ? align : "left")};
  font-weight: ${({weight}) => (weight ? weight : "bold")};
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

export const RegisterMeal = styled(View)`
  flex: 1;
  bottom: 40px;
  justify-content: flex-end;
`;

export const InputArea = styled(TextInput)<{
  multiline?: boolean;
  numberOfLines?: number;
}>`
  height: ${({multiline}) => (multiline ? 150 : 50)}px;
  border-radius: 6px;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_5};
  padding: 15px;
`;
