import {mealsGetAll} from "@storage/meal/mealsGetAll";
import {Meal} from "src/@types";

export async function countDietMeals() {
  try {
    const meals = await mealsGetAll();
    const dietMeals = meals.filter((meal: Meal) => meal.isOnDiet);
    return dietMeals.length;
  } catch (error) {
    throw error;
  }
}
