import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../models/recipe.model";
import { Ingredient } from "../models/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable({
    providedIn: "root"
})
export class RecipeService {

    private _recipes: Recipe[] = [];
    public selectedRecipe = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {
        this._recipes.push(
            new Recipe(
                'Ratatouille',
                'A French Provençal dish of stewed vegetables.',
                'https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg',
                 [
                    new Ingredient('eggplants', 2),
                    new Ingredient('roma tomatoes', 6),
                    new Ingredient('yellow squashes', 2),
                    new Ingredient('zucchinis', 2),
                    new Ingredient('tablespoons olive oil', 2),
                    new Ingredient('medium white onion, diced', 1),
                    new Ingredient('cloves garlic, minced', 4),
                    new Ingredient('red bell pepper, seeded and diced', 1),
                    new Ingredient('yellow bell pepper, seeded and diced', 1),
                    new Ingredient('tabblespoon kosher salt, or to taste', 1),
                    new Ingredient('tabblespoon freshly ground black pepper, or to taste', 1),
                    new Ingredient('oz crushed tomatoes(795 g)', 28),
                    new Ingredient('tablespoons thinly sliced fresh basil', 2)
                 ]
                ),
            new Recipe(
                'Broccoli and Chicken Stir-Fry',
                'A chicken and broccoli recipe to make at home.', 
                'https://www.allrecipes.com/thmb/EGKt0i_NNKIe_9Ayg0ueC6GCl3U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/240708-broccoli-and-chicken-stir-fry-3x4-186-copy-9c78ae7b643b4fbcb4259dda069f9f4f.jpg',
                [
                    new Ingredient('cup soy sauce', 2/3),
                    new Ingredient('cup brown sugar', 1/4),
                    new Ingredient('teaspoon ground ginger', 1/2),
                    new Ingredient(' pinch red pepper flakes, or to taste', 1),
                    new Ingredient('tablespoons water', 2),
                    new Ingredient('tablespoons cornstarch', 2),
                    new Ingredient('teaspoons vegetable oil, or to taste', 2),
                    new Ingredient('skinless, boneless chicken breast halves, cut into chunks', 3),
                    new Ingredient('onion, sliced', 1),
                    new Ingredient(' cups broccoli florets', 3),
                ]
                )
        )
    }

    public get recipes(): Recipe[] {
        return this._recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

}