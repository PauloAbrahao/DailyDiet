import {mealsGetAll} from "@storage/meal/mealsGetAll";

export async function countTotalMeals() {
  try {
    const meals = await mealsGetAll();
    return meals.length;
  } catch (error) {
    throw error;
  }
}
