import { Component, Input } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  @Input()
  recipe: Recipe;

  constructor(private recipeService: RecipeService) {

  }

  navigateToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

}
