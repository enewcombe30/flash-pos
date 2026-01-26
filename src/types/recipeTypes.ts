export type IdNamePair = {
  id: number;
  name: string;
};

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
  dietaryTag: IdNamePair;
};

export type RecipeAllergens = {
  recipeId: number;
  allergenId: number;
  allergen: IdNamePair;
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
  dietaryTag: IdNamePair;
};

export type Allergen = {
  id: number;
  ingredientId: number;
  allergenId: number;
  allergen: IdNamePair;
};

export interface RecipeBase {
  name: string;
  costPrice: number;
  salePrice: number;
  subDivisionId: number;
  version: number;
  id: number;
  RecipeIngredient: RecipeIngredient[];
  recipeAllergens: RecipeAllergens[];
  recipeDietaryTags: RecipeDietaryTags[];
}

export type RecipeFromAPI = RecipeBase;

export interface RecipeInOrder extends RecipeBase {
  orderItemId: string;
  userNotes: string[];
  assignedAllergies: Allergen[];
}

export interface Recipe extends RecipeBase {
  orderItemId: string;
  userNotes: string[];
  assignedAllergies: Allergen[];
}

export type RecipeResponse = RecipeFromAPI[];

// Type for a recipe being edited in an order
// orderIndex: The position/index of this item in the order array
export type EditableRecipe = {
  orderIndex: number;
  recipe: Recipe;
};

// Legacy alias for backward compatibility - id field represents orderIndex
export type editProduct = {
  id: number;
  recipe: Recipe;
};

// Utility types for partial updates and ensuring required fields
// Example usage:
// - For API responses: RecipeFromAPI or RecipeResponse
// - For order items with all fields: RecipeInOrder
// - For partial updates: Partial<Recipe> or Partial<RecipeInOrder>
// - For ensuring all fields: Required<Recipe>
