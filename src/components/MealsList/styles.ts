import styled from "styled-components";
import {Text, View} from "react-native";

export const Container = styled(View)`
  flex-direction: column;
  flex: 1;
`;

export const Date = styled(Text)`
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  font-weight: bold;
`;

export const Label = styled(Text)`
  font-size: ${({theme}) => theme.FONT_SIZE.SM2}px;
  font-weight: normal;
  text-align: center;
  margin-top: 150px;
`;
