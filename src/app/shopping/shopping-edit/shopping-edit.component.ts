import { Component, ContentChild, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;

  @Output() ingredientAddedEmitter: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  onAddIngredient(): void {
    const ingredientAdded = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.ingredientAddedEmitter.emit(ingredientAdded);
  }

}
