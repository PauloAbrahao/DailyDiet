import {ThemeType} from "styled-components";
import "styled-components/native";

export type ButtonProps = {
  title: string;
  icon?: string;
  buttonColor?: string;
  iconColor?: string;
  onPress: () => void;
};

export type MealsCardProps = {
  time: string;
  title: string;
};

type MealItem = {
  time: string;
  title: string;
};

export type MealSection = {
  date: string;
  data: MealItem[];
};

export type StatisticsProps = {
  percentage: string;
};

export type CardProps = {
  theme?: {
    COLORS?: ThemeType;
  };
  title: string;
  subtitle?: string;
  color?: string;
  width?: number;
  height?: number;
};

export type CardStyleProps = {
  theme?: {
    COLORS?: ThemeType;
  };
  color?: string | keyof ThemeType;
  width?: number;
  height?: number;
};
