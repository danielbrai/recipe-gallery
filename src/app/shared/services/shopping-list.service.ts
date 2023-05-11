import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";

@Injectable({
    providedIn: "root"
})
export class ShoppingListService {

    private _ingredients: Ingredient[] = []

    ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

    constructor() {
        this._ingredients.push(
            new Ingredient('Eggplant', 2),
            new Ingredient('Roma Tomatoes', 6),
            new Ingredient('Yellow Squashes', 2),
            new Ingredient('Zucchinis', 2)
        )
    }

    public get ingredients(): Ingredient[] {
        return this._ingredients.slice();
    }

    public addIngredients(ingredients: Ingredient[])  :void {
        this._ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this._ingredients.slice());
    }

    public addIngredient(ingredient: Ingredient): void {
        this._ingredients.push(ingredient);
        this.ingredientsChanged.emit(this._ingredients.slice());
    }
}