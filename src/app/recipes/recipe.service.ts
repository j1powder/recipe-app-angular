import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipes.model";

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
          'First Recipe',
          'This is simply a test',
          'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-580x697.jpg'
        ),
        new Recipe(
          'Second Recipe',
          'This is simply a test',
          'https://hips.hearstapps.com/hmg-prod/images/crepes-lead-64347419487e4.jpg'
        ),
      ];

      getRecipes() {
        return this.recipes.slice();
      }
}