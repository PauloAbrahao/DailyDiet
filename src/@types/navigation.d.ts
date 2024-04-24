import {MealsCardProps} from ".";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        percentage: number;
      };
      newMeal: {
        id?: string;
        name?: string;
        description?: string;
        date?: string;
        time?: string;
        isOnDiet?: boolean;
      };
      feedback: {
        isOnDiet: boolean | null;
      };
      meal: MealsCardProps;
    }
  }
}
