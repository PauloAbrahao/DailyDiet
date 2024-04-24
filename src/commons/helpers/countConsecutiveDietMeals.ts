import {mealsGetAll} from "@storage/meal/mealsGetAll";

export async function countConsecutiveDietMeals() {
  try {
    const meals = await mealsGetAll();
    let consecutiveDietMeals = 0;
    let maxConsecutiveDietMeals = 0;

    for (let i = 0; i < meals.length; i++) {
      if (meals[i].isOnDiet) {
        consecutiveDietMeals++;

        if (consecutiveDietMeals > maxConsecutiveDietMeals) {
          maxConsecutiveDietMeals = consecutiveDietMeals;
        }
      } else {
        consecutiveDietMeals = 0;
      }
    }

    return maxConsecutiveDietMeals;
  } catch (error) {
    throw error;
  }
}
