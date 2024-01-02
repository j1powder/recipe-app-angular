import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
 // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];


  constructor(private recipeService: RecipeService,
    private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

/*   onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  } */
}
