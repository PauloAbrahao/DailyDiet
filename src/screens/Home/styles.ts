import styled from "styled-components";
import {SafeAreaView} from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_7};
  padding: 10px 20px;
`;
