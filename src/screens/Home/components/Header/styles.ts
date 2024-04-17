import styled from "styled-components";
import {View, Image} from "react-native";

export const Container = styled(View)`
  top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Profile = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 2.5px solid #000000;
`;
