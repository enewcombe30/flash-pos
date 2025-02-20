// types.ts

// Define the Recipe Type
export interface Recipe {
  id: number;
  name: string;
  description: string;
  instructions: string;
  category_id: number;
  version: number;
}

// Define the response from the API, which will be an array of recipes
export type RecipeResponse = Recipe[];
