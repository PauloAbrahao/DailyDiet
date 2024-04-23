import AsyncStorage from "@react-native-async-storage/async-storage";
import {MEAL_COLLECTION} from "@storage/storageConfig";
import {mealsGetAll} from "./mealsGetAll";
import {FormProps, Meal} from "src/@types";
import { removeMeal } from "./removeMeal";

export async function editMeal(mealIdToEdit: FormProps, updatedMealData: Meal) {
  try {
    const storedMeals: Meal[] = await mealsGetAll();

    const updatedMeals = storedMeals.map((meal) =>
      meal.id === mealIdToEdit.id_props ? {...meal, ...updatedMealData} : meal
    );

    await removeMeal(mealIdToEdit.id_props)

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals));
  } catch (error) {
    throw error;
  }
}
