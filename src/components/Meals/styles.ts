import styled from "styled-components";
import {View, Text} from "react-native";

export const Container = styled(View)`
  flex-direction: column;
  margin-top: 90px;
`;

export const Title = styled(Text)`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin-bottom: 15px;
`;