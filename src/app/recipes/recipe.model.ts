export class Recipe {

    constructor(private _name: string, private _description: string, private _imagePath: string) {
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

}