import styled, {css} from "styled-components";
import {Text, TouchableOpacity, View} from "react-native";

export const Container = styled(View)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #00000030;
`;

export const ModalContent = styled(View)`
  background-color: ${({theme}) => theme.COLORS.GRAY_7};
  opacity: 1;
  flex: 1;
  width: 88%;
  height: 200px;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 8px;
  position: absolute;
`;

export const Title = styled(Text)`
  flex: 1;
  top: 40px;
  color: ${({theme}) => theme.COLORS.GRAY_2};
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  font-weight: bold;
  text-align: center;
  padding: 0 40px;
`;

export const ButtonContainer = styled(View)`
  flex: 1;
  gap: 15px;
  width: 40%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
