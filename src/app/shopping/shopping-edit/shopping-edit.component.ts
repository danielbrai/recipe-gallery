import { Component, ContentChild, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {

  }


  addIngredient(): void {
    const ingredientAdded = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.shoppingListService.addIngredient(ingredientAdded);
  }

}
