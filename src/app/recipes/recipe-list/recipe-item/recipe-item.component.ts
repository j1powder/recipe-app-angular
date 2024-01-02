import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  ngOnInit() {}

  //@Output() recipeSelected = new EventEmitter<void>();
  //constructor(private recipeService: RecipeService) {}
  

/*   onSelected() {
    this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);

  } */
}
