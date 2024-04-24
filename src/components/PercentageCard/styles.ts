import styled, {css} from "styled-components";
import {Text, TouchableOpacity} from "react-native";
import {ArrowUpRight} from "phosphor-react-native";

interface IconProps {
  percentage: number;
}

export const Container = styled(TouchableOpacity)<{percentage: number}>`
  background-color: ${({theme, percentage}) =>
    percentage >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  width: 100%;
  height: 120px;
  top: 50px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 8px;
`;

export const Percentage = styled(Text)`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XL2}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Title = styled(Text)`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM2}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Icon = styled(ArrowUpRight)<IconProps>((props) => ({
  size: 24,
  color:
    props.percentage >= 50
      ? props.theme.COLORS.GREEN_DARK
      : props.theme.COLORS.RED_DARK,
  position: "absolute",
  right: 9,
  top: 9,
  alignSelf: "center",
}));
