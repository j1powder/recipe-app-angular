import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipes.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService{

  
  recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
          'Terrificly Awesome Tomoto Soup',
          'Savory and Satisfying Tomato Soup',
          'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-580x697.jpg',
          [
            new Ingredient('Tomatoes', 5),
            new Ingredient('Tomato Sauce Canned', 2)
          ]
        ),
        new Recipe(
          'World Famous Crepes',
          'Nice & Fluffy, Just like Grandma makes',
          'https://hips.hearstapps.com/hmg-prod/images/crepes-lead-64347419487e4.jpg',
          [
            new Ingredient('Eggs', 2),
            new Ingredient('Lingen Berries bundle', 2)
          ]
        ),
      ];

      constructor(private slService: ShoppingListService){}

      getRecipes() {
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

}