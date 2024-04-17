export type ButtonProps = {
  title: string;
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
}