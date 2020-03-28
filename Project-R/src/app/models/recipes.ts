export interface Recipe {
    id: number;
    name: string;
    ingredients: Ingredient[];
    completionTime: number;
    complexity: Complexity;
    category: Category;
    img: string;
    creationDate: Date;
    instruction: string;
}

export interface RecipeListing {
    name: string;
    completionTime: number;
    complexity: Complexity;
    creationDate: Date;
}

export interface Ingredient {
    name: string;
}

export interface RecipeRating {
    recipeId: number;
    rating: number;
}

export enum Complexity {
    Beginer = 1,
    Intermediate,
    Expert,
    Professional
}

export enum Category {
    Breakfast = 'Πρωινό',
    Lunch = 'Μεσημεριανό',
    Dinner = 'Βραδυνό'
}
