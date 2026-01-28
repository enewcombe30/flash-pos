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

export type FreeFromOption = {
  isAvailable: boolean;
  label: string;
  replaces: string;
};

export interface Ingredient {
  id: number;
  name: string;
  unit: string;
  metricValue: number;
  divisionId: number;
  ingredientAllergens: Allergen[];
  freeFromOption: FreeFromOption;
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

export interface Recipe extends RecipeBase {
  orderItemId: string;
  userNotes: string[];
  assignedAllergies: Allergen[];
}

export type RecipeResponse = RecipeFromAPI[];

export type EditableRecipe = {
  orderIndex: number;
  recipe: Recipe;
};

export type editProduct = {
  id: number;
  recipe: Recipe;
};
