import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  public recipes: Recipe[] = [];

  @Output()
  selectedRecipeEmitter: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() {
    this.recipes.push(
      new Recipe('Ratatouille', 'A French Provençal dish of stewed vegetables.', 'https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg'),
      new Recipe('Broccoli and Chicken Stir-Fry', 'A chicken and broccoli recipe to make at home.', 'https://www.allrecipes.com/thmb/EGKt0i_NNKIe_9Ayg0ueC6GCl3U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/240708-broccoli-and-chicken-stir-fry-3x4-186-copy-9c78ae7b643b4fbcb4259dda069f9f4f.jpg')
    )
  }

  onSelectRecipe(recipe:Recipe) {
    this.selectedRecipeEmitter.emit(recipe);
  }

}
