import { RecipeResponse } from "../types/recipeTypes";

// Pesto Pasta Recipe Constant
export const Recipes: RecipeResponse = [
  {
    name: "Pesto Pasta",
    subDivisionId: 3,
    version: 1,
    costPrice: 4.5,
    salePrice: 12.0,
    id: 1,
    RecipeIngredient: [
      {
        amount: 100,
        ingredientId: 1,
        recipeId: 1,
        ingredients: [
          {
            id: 1,
            name: "Pesto",
            unit: "g",
            metricValue: 100,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [
              {
                dietaryTagId: 2,
                ingredientId: 1,
                dietaryTag: { id: 2, name: "Vegetarian" },
              },
            ],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [
          {
            recipeId: 1,
            dietaryTagId: 2,
            dietaryTag: { id: 2, name: "Vegetarian" },
          },
        ],
      },
      {
        amount: 250,
        ingredientId: 2,
        recipeId: 1,
        ingredients: [
          {
            id: 2,
            name: "Pasta",
            unit: "g",
            metricValue: 250,
            divisionId: 1,
            ingredientAllergens: [
              {
                id: 10,
                ingredientId: 2,
                allergenId: 1,
                allergen: { id: 1, name: "Gluten" },
              },
            ],
            ingredientDietaryTags: [
              {
                dietaryTagId: 2,
                ingredientId: 2,
                dietaryTag: { id: 2, name: "Vegetarian" },
              },
            ],
          },
        ],
        recipeAllergens: [
          { recipeId: 1, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
        ],
        recipeDietaryTags: [
          {
            recipeId: 1,
            dietaryTagId: 2,
            dietaryTag: { id: 2, name: "Vegetarian" },
          },
        ],
      },
      {
        amount: 50,
        ingredientId: 3,
        recipeId: 1,
        ingredients: [
          {
            id: 3,
            name: "Parmesan Cheese",
            unit: "g",
            metricValue: 50,
            divisionId: 1,
            ingredientAllergens: [
              {
                id: 14,
                ingredientId: 3,
                allergenId: 3,
                allergen: { id: 3, name: "Dairy" },
              },
            ],
            ingredientDietaryTags: [
              {
                dietaryTagId: 2,
                ingredientId: 3,
                dietaryTag: { id: 2, name: "Vegetarian" },
              },
            ],
          },
        ],
        recipeAllergens: [
          { recipeId: 1, allergenId: 3, allergen: { id: 3, name: "Dairy" } },
        ],
        recipeDietaryTags: [
          {
            recipeId: 1,
            dietaryTagId: 2,
            dietaryTag: { id: 2, name: "Vegetarian" },
          },
        ],
      },
    ],
    recipeAllergens: [],
    recipeDietaryTags: [
      { recipeId: 2, dietaryTagId: 1, dietaryTag: { id: 1, name: "Vegan" } },
      { recipeId: 2, dietaryTagId: 3, dietaryTag: { id: 3, name: "Keto" } },
    ],
    userNotes: [],
  },

  // Grilled Chicken Salad Recipe Constant
  {
    name: "Grilled Chicken Salad",
    subDivisionId: 3,
    version: 1,
    id: 2,
    costPrice: 5,
    salePrice: 13.0,
    RecipeIngredient: [
      {
        amount: 200,
        ingredientId: 4,
        recipeId: 2,
        ingredients: [
          {
            id: 4,
            name: "Chicken",
            unit: "g",
            metricValue: 200,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [
              {
                dietaryTagId: 3,
                ingredientId: 4,
                dietaryTag: { id: 3, name: "Keto" },
              },
            ],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [
          { recipeId: 2, dietaryTagId: 3, dietaryTag: { id: 3, name: "Keto" } },
        ],
      },
      {
        amount: 10,
        ingredientId: 5,
        recipeId: 2,
        ingredients: [
          {
            id: 5,
            name: "Garlic",
            unit: "g",
            metricValue: 10,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [
              {
                dietaryTagId: 1,
                ingredientId: 5,
                dietaryTag: { id: 1, name: "Vegan" },
              },
            ],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [
          {
            recipeId: 2,
            dietaryTagId: 1,
            dietaryTag: { id: 1, name: "Vegan" },
          },
        ],
      },
      {
        amount: 150,
        ingredientId: 6,
        recipeId: 2,
        ingredients: [
          {
            id: 6,
            name: "Tomato",
            unit: "g",
            metricValue: 150,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [
              {
                dietaryTagId: 1,
                ingredientId: 6,
                dietaryTag: { id: 1, name: "Vegan" },
              },
            ],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [
          {
            recipeId: 2,
            dietaryTagId: 1,
            dietaryTag: { id: 1, name: "Vegan" },
          },
        ],
      },
      {
        amount: 100,
        ingredientId: 7,
        recipeId: 2,
        ingredients: [
          {
            id: 7,
            name: "Mozzarella",
            unit: "g",
            metricValue: 100,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [
              {
                dietaryTagId: 2,
                ingredientId: 7,
                dietaryTag: { id: 2, name: "Vegetarian" },
              },
            ],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [
          {
            recipeId: 2,
            dietaryTagId: 2,
            dietaryTag: { id: 2, name: "Vegetarian" },
          },
        ],
      },
      {
        amount: 20,
        ingredientId: 8,
        recipeId: 2,
        ingredients: [
          {
            id: 8,
            name: "Olive Oil",
            unit: "ml",
            metricValue: 20,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [
              {
                dietaryTagId: 1,
                ingredientId: 8,
                dietaryTag: { id: 1, name: "Vegan" },
              },
              {
                dietaryTagId: 3,
                ingredientId: 8,
                dietaryTag: { id: 3, name: "Keto" },
              },
            ],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [
          {
            recipeId: 2,
            dietaryTagId: 1,
            dietaryTag: { id: 1, name: "Vegan" },
          },
          { recipeId: 2, dietaryTagId: 3, dietaryTag: { id: 3, name: "Keto" } },
        ],
      },
      {
        amount: 100,
        ingredientId: 9,
        recipeId: 2,
        ingredients: [
          {
            id: 9,
            name: "Lettuce",
            unit: "g",
            metricValue: 100,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [
              {
                dietaryTagId: 1,
                ingredientId: 9,
                dietaryTag: { id: 1, name: "Vegan" },
              },
            ],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [
          {
            recipeId: 2,
            dietaryTagId: 1,
            dietaryTag: { id: 1, name: "Vegan" },
          },
        ],
      },
      {
        amount: 80,
        ingredientId: 10,
        recipeId: 2,
        ingredients: [
          {
            id: 10,
            name: "Cucumber",
            unit: "g",
            metricValue: 80,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [
              {
                dietaryTagId: 1,
                ingredientId: 10,
                dietaryTag: { id: 1, name: "Vegan" },
              },
            ],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [
          {
            recipeId: 2,
            dietaryTagId: 1,
            dietaryTag: { id: 1, name: "Vegan" },
          },
        ],
      },
      {
        amount: 50,
        ingredientId: 11,
        recipeId: 2,
        ingredients: [
          {
            id: 11,
            name: "Olives",
            unit: "g",
            metricValue: 50,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [
              {
                dietaryTagId: 3,
                ingredientId: 11,
                dietaryTag: { id: 3, name: "Keto" },
              },
            ],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [
          { recipeId: 2, dietaryTagId: 3, dietaryTag: { id: 3, name: "Keto" } },
        ],
      },
      {
        amount: 30,
        ingredientId: 12,
        recipeId: 2,
        ingredients: [
          {
            id: 12,
            name: "Balsamic Vinegar",
            unit: "ml",
            metricValue: 30,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [
              {
                dietaryTagId: 1,
                ingredientId: 12,
                dietaryTag: { id: 1, name: "Vegan" },
              },
            ],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [
          {
            recipeId: 2,
            dietaryTagId: 1,
            dietaryTag: { id: 1, name: "Vegan" },
          },
        ],
      },
    ],
    recipeAllergens: [],
    recipeDietaryTags: [
      { recipeId: 2, dietaryTagId: 3, dietaryTag: { id: 3, name: "Keto" } },
      {
        recipeId: 2,
        dietaryTagId: 2,
        dietaryTag: { id: 2, name: "Vegetarian" },
      },
      { recipeId: 2, dietaryTagId: 1, dietaryTag: { id: 1, name: "Vegan" } },
    ],
    userNotes: [],
  },
];
