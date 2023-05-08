import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input()
  recipe: Recipe;

  @Output()
  recipeEventEmitter: EventEmitter<void> = new EventEmitter<void>();

  onRecipeClick(){
    this.recipeEventEmitter.emit();
  }

}
