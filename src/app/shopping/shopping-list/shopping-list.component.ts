import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.ingredients;
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredient: Ingredient[]) => {
        this.ingredients = this.shoppingListService.ingredients;
      }
    )
  }

}
