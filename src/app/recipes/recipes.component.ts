import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule, RecipeDetailComponent, RecipeListComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() {}
  ngOnInit() {}
}
