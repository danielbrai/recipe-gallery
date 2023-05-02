import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  public recipes: Recipe[] = [];

  constructor() {
    this.recipes.push(
      new Recipe('Ratatouille', 'A French Provençal dish of stewed vegetables.', 'https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg')
    )  
    
    this.recipes.push(
      new Recipe('Ratatouille', 'A French Provençal dish of stewed vegetables.', 'https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg')
    )
  }

}
