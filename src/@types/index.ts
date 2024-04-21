import {ThemeType} from "styled-components";
import "styled-components/native";

export type ButtonProps = {
  title: string;
  icon?: string;
  buttonColor?: string;
  iconColor?: string;
  selectedColor?: string;
  isSelected?: boolean;
  onPress: () => void;
};

export type MealsCardProps = {
  title: string;
  description: string;
  date: string;
  time: string;
  isOnDiet: boolean;
};

export type Meal = {
  name: string;
  description: string;
  date: string;
  time: string;
  isOnDiet: boolean;
};

export type MealSection = {
  date: string;
  data: Meal;
};

export type StatisticsProps = {
  percentage: string;
};

export type FeedbackProps = {
  isOnDiet: boolean;
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
  color?: string;
  width?: number;
  height?: number;
};

export type NewMealProps = {
  meal: {
    name: string;
    description: string;
    date: string;
    time: string;
    isOnDiet: boolean;
  }[];
};
