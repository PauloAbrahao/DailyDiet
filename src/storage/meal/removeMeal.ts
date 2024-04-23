import AsyncStorage from "@react-native-async-storage/async-storage";
import {MEAL_COLLECTION} from "@storage/storageConfig";
import {mealsGetAll} from "./mealsGetAll";
import {Meal} from "src/@types";

export async function removeMeal(mealIdToDelete: string) {
  try {
    const storedMeals: Meal[] = await mealsGetAll();

    const updatedMeals = storedMeals.filter(
      (meal) => meal.id !== mealIdToDelete
    );

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals));
  } catch (error) {
    throw error;
  }
}
