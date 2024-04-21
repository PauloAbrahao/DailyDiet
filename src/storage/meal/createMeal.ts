import AsyncStorage from "@react-native-async-storage/async-storage";

import {MEAL_COLLECTION} from "@storage/storageConfig";
import {mealsGetAll} from "./mealsGetAll";
import {AppError} from "@utils/AppError";
import {Meal} from "src/@types";

export async function createMeal(newMeal: Meal) {
  try {
    let storedMeals: Meal[] = await mealsGetAll();

    if (!storedMeals) {
      storedMeals = [];
    }

    const mealAlreadyExists: boolean = storedMeals.some(
      (meal) =>
        meal.name === newMeal.name &&
        meal.description === newMeal.description &&
        meal.date === newMeal.date &&
        meal.time === newMeal.time &&
        meal.isOnDiet === newMeal.isOnDiet
    );

    if (mealAlreadyExists) {
      throw new AppError("Essa refeição já foi cadastrada.");
    }

    const storage = JSON.stringify([...storedMeals, newMeal]);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
