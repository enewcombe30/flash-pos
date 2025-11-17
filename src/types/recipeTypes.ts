// types.ts

// Define the Recipe Type
export type RecipeIngredient = {
  amount: number;
  ingredientId: number;
  recipeId: number;
  ingredients: Ingredient[];
  recipeAllergens: RecipeAllergens[];
  recipeDietaryTags: RecipeDietaryTags[];
};

export type RecipeDietaryTags = {
  recipeId: number;
  dietaryTagId: number;
  dietaryTag: { id: number; name: string };
};

export type RecipeAllergens = {
  recipeId: number;
  allergenId: number;
  allergen: { id: number; name: string };
};

export interface Ingredient {
  id: number;
  name: string;
  unit: string;
  metricValue: number;
  divisionId: number;
  ingredientAllergens: Allergen[];
  ingredientDietaryTags: DietaryTag[];
}

export type DietaryTag = {
  dietaryTagId: number;
  ingredientId: number;
  dietaryTag: { id: number; name: string };
};

export type Allergen = {
  id: number;
  ingredientId: number;
  allergenId: number;
  allergen: { id: number; name: string };
};

export interface Recipe {
  name: string;
  costPrice: number;
  salePrice: number;
  subDivisionId: number;
  version: number;
  id: number;
  orderItemId?: string;
  RecipeIngredient: RecipeIngredient[];
  recipeAllergens: RecipeAllergens[];
  recipeDietaryTags: RecipeDietaryTags[];
  userNotes: string[];
  assignedAllergies?: Allergen[];
}

// Define the response from the API, which will be an array of recipes
export type RecipeResponse = Recipe[];

export type editProduct = {
  id: number;
  recipe: Recipe;
};
