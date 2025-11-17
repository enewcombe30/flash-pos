import { Allergen } from "../types/recipeTypes";

export const allergies: Allergen[] = [
  {
    id: 1,
    ingredientId: 0,
    allergenId: 1,
    allergen: { id: 1, name: "Gluten" },
  },
  { id: 4, ingredientId: 0, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
  {
    id: 2,
    ingredientId: 0,
    allergenId: 2,
    allergen: { id: 2, name: "Peanuts" },
  },
  {
    id: 3,
    ingredientId: 0,
    allergenId: 3,
    allergen: { id: 3, name: "Tree Nuts" },
  },

  { id: 5, ingredientId: 0, allergenId: 5, allergen: { id: 5, name: "Eggs" } },
  { id: 6, ingredientId: 0, allergenId: 6, allergen: { id: 6, name: "Soy" } },
  { id: 7, ingredientId: 0, allergenId: 7, allergen: { id: 7, name: "Fish" } },
  {
    id: 8,
    ingredientId: 0,
    allergenId: 8,
    allergen: { id: 8, name: "Shellfish" },
  },
  { id: 9, ingredientId: 0, allergenId: 9, allergen: { id: 9, name: "Wheat" } },
  {
    id: 10,
    ingredientId: 0,
    allergenId: 10,
    allergen: { id: 10, name: "Sesame" },
  },
];
