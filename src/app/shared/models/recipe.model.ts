import { Ingredient } from "./ingredient.model";

export class Recipe {

    constructor(private _name: string, private _description: string, private _imagePath: string, private _ingredients: Ingredient[]) {
    }

    public get name(): string {
        return this._name;
    }

    public get description(): string {
        return this._description;
    }

    public get imagePath(): string {
        return this._imagePath;
    }

    public get ingredients(): Ingredient[] {
        return this._ingredients;
    }

}