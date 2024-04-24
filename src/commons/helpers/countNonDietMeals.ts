import {mealsGetAll} from "@storage/meal/mealsGetAll";
import {Meal} from "src/@types";

export async function countNonDietMeals() {
  try {
    const meals = await mealsGetAll();
    const nonDietMeals = meals.filter((meal: Meal) => !meal.isOnDiet);
    return nonDietMeals.length;
  } catch (error) {
    throw error;
  }
}
