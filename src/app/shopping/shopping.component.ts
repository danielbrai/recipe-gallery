import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  ingredients: Ingredient[] = []

  ngOnInit(): void {

    this.ingredients.push(
      new Ingredient('Eggplant', 2),
      new Ingredient('Roma Tomatoes', 6),
      new Ingredient('Yellow Squashes', 2),
      new Ingredient('Zucchinis', 2)
    )

  }

  onAddIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }
}
