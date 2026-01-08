import { Recipe } from "../types/recipeTypes";

// Use the detailed recipes from defaultRecipes for the first 2 items
// and populate the rest with realistic ingredient data
export const DummyRecipes: Recipe[] = [
  // Use existing detailed recipes
  {
    name: "Spaghetti Bolognese",
    id: 1,
    subDivisionId: 1,
    version: 1,
    costPrice: 2.8,
    salePrice: 7.0,
    RecipeIngredient: [
      {
        amount: 200,
        ingredientId: 2,
        recipeId: 1,
        ingredients: [
          {
            id: 2,
            name: "Pasta",
            unit: "g",
            metricValue: 200,
            divisionId: 1,
            ingredientAllergens: [
              {
                id: 10,
                ingredientId: 2,
                allergenId: 1,
                allergen: { id: 1, name: "Gluten" },
              },
            ],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [
          { recipeId: 1, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
        ],
        recipeDietaryTags: [],
      },
      {
        amount: 150,
        ingredientId: 13,
        recipeId: 1,
        ingredients: [
          {
            id: 13,
            name: "Ground Beef",
            unit: "g",
            metricValue: 150,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 100,
        ingredientId: 6,
        recipeId: 1,
        ingredients: [
          {
            id: 6,
            name: "Tomato",
            unit: "g",
            metricValue: 100,
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
        recipeDietaryTags: [],
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
                allergenId: 4,
                allergen: { id: 4, name: "Dairy" },
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
          { recipeId: 1, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
        ],
        recipeDietaryTags: [],
      },
    ],
    recipeAllergens: [
      { recipeId: 1, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
      { recipeId: 1, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
    ],
    recipeDietaryTags: [],
    userNotes: [],
  },

  {
    name: "Vegetable Stir Fry",
    id: 3,
    subDivisionId: 1,
    version: 1,
    costPrice: 2.2,
    salePrice: 6.0,
    RecipeIngredient: [
      {
        amount: 100,
        ingredientId: 17,
        recipeId: 3,
        ingredients: [
          {
            id: 17,
            name: "Bell Pepper",
            unit: "g",
            metricValue: 100,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [
              {
                dietaryTagId: 1,
                ingredientId: 17,
                dietaryTag: { id: 1, name: "Vegan" },
              },
            ],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 80,
        ingredientId: 18,
        recipeId: 3,
        ingredients: [
          {
            id: 18,
            name: "Broccoli",
            unit: "g",
            metricValue: 80,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [
              {
                dietaryTagId: 1,
                ingredientId: 18,
                dietaryTag: { id: 1, name: "Vegan" },
              },
            ],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 30,
        ingredientId: 20,
        recipeId: 3,
        ingredients: [
          {
            id: 20,
            name: "Soy Sauce",
            unit: "ml",
            metricValue: 30,
            divisionId: 1,
            ingredientAllergens: [
              {
                id: 20,
                ingredientId: 20,
                allergenId: 6,
                allergen: { id: 6, name: "Soy" },
              },
            ],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [
          { recipeId: 3, allergenId: 6, allergen: { id: 6, name: "Soy" } },
        ],
        recipeDietaryTags: [],
      },
    ],
    recipeAllergens: [
      { recipeId: 3, allergenId: 6, allergen: { id: 6, name: "Soy" } },
    ],
    recipeDietaryTags: [
      { recipeId: 3, dietaryTagId: 1, dietaryTag: { id: 1, name: "Vegan" } },
    ],
    userNotes: [],
  },

  {
    name: "Beef Tacos",
    id: 4,
    subDivisionId: 1,
    version: 1,
    costPrice: 3.5,
    salePrice: 9,
    RecipeIngredient: [
      {
        amount: 150,
        ingredientId: 13,
        recipeId: 4,
        ingredients: [
          {
            id: 13,
            name: "Ground Beef",
            unit: "g",
            metricValue: 150,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 3,
        ingredientId: 21,
        recipeId: 4,
        ingredients: [
          {
            id: 21,
            name: "Taco Shells",
            unit: "pcs",
            metricValue: 3,
            divisionId: 1,
            ingredientAllergens: [
              {
                id: 21,
                ingredientId: 21,
                allergenId: 1,
                allergen: { id: 1, name: "Gluten" },
              },
            ],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [
          { recipeId: 4, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
        ],
        recipeDietaryTags: [],
      },
      {
        amount: 50,
        ingredientId: 22,
        recipeId: 4,
        ingredients: [
          {
            id: 22,
            name: "Cheddar Cheese",
            unit: "g",
            metricValue: 50,
            divisionId: 1,
            ingredientAllergens: [
              {
                id: 22,
                ingredientId: 22,
                allergenId: 4,
                allergen: { id: 4, name: "Dairy" },
              },
            ],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [
          { recipeId: 4, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
        ],
        recipeDietaryTags: [],
      },
    ],
    recipeAllergens: [
      { recipeId: 4, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
      { recipeId: 4, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
    ],
    recipeDietaryTags: [],
    userNotes: [],
  },

  {
    name: "Caesar Salad",
    id: 5,
    subDivisionId: 1,
    version: 1,
    costPrice: 2.7,
    salePrice: 7,
    RecipeIngredient: [
      {
        amount: 150,
        ingredientId: 9,
        recipeId: 5,
        ingredients: [
          {
            id: 9,
            name: "Lettuce",
            unit: "g",
            metricValue: 150,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 60,
        ingredientId: 3,
        recipeId: 5,
        ingredients: [
          {
            id: 3,
            name: "Parmesan Cheese",
            unit: "g",
            metricValue: 60,
            divisionId: 1,
            ingredientAllergens: [
              {
                id: 14,
                ingredientId: 3,
                allergenId: 4,
                allergen: { id: 4, name: "Dairy" },
              },
            ],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [
          { recipeId: 5, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
        ],
        recipeDietaryTags: [],
      },
      {
        amount: 40,
        ingredientId: 24,
        recipeId: 5,
        ingredients: [
          {
            id: 24,
            name: "Caesar Dressing",
            unit: "ml",
            metricValue: 40,
            divisionId: 1,
            ingredientAllergens: [
              {
                id: 24,
                ingredientId: 24,
                allergenId: 5,
                allergen: { id: 5, name: "Eggs" },
              },
            ],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [
          { recipeId: 5, allergenId: 5, allergen: { id: 5, name: "Eggs" } },
        ],
        recipeDietaryTags: [],
      },
    ],
    recipeAllergens: [
      { recipeId: 5, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
      { recipeId: 5, allergenId: 5, allergen: { id: 5, name: "Eggs" } },
    ],
    recipeDietaryTags: [
      {
        recipeId: 5,
        dietaryTagId: 2,
        dietaryTag: { id: 2, name: "Vegetarian" },
      },
    ],
    userNotes: [],
  },

  {
    name: "Margherita Pizza",
    id: 6,
    subDivisionId: 1,
    version: 1,
    costPrice: 2.9,
    salePrice: 7.5,
    RecipeIngredient: [
      {
        amount: 250,
        ingredientId: 25,
        recipeId: 6,
        ingredients: [
          {
            id: 25,
            name: "Pizza Dough",
            unit: "g",
            metricValue: 250,
            divisionId: 1,
            ingredientAllergens: [
              {
                id: 25,
                ingredientId: 25,
                allergenId: 1,
                allergen: { id: 1, name: "Gluten" },
              },
            ],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [
          { recipeId: 6, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
        ],
        recipeDietaryTags: [],
      },
      {
        amount: 120,
        ingredientId: 7,
        recipeId: 6,
        ingredients: [
          {
            id: 7,
            name: "Mozzarella",
            unit: "g",
            metricValue: 120,
            divisionId: 1,
            ingredientAllergens: [
              {
                id: 26,
                ingredientId: 7,
                allergenId: 4,
                allergen: { id: 4, name: "Dairy" },
              },
            ],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [
          { recipeId: 6, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
        ],
        recipeDietaryTags: [],
      },
      {
        amount: 100,
        ingredientId: 6,
        recipeId: 6,
        ingredients: [
          {
            id: 6,
            name: "Tomato",
            unit: "g",
            metricValue: 100,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
    ],
    recipeAllergens: [
      { recipeId: 6, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
      { recipeId: 6, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
    ],
    recipeDietaryTags: [
      {
        recipeId: 6,
        dietaryTagId: 2,
        dietaryTag: { id: 2, name: "Vegetarian" },
      },
    ],
    userNotes: [],
  },

  {
    name: "Grilled Salmon",
    id: 7,
    subDivisionId: 1,
    version: 1,
    costPrice: 4.8,
    salePrice: 12,
    RecipeIngredient: [
      {
        amount: 200,
        ingredientId: 27,
        recipeId: 7,
        ingredients: [
          {
            id: 27,
            name: "Salmon Fillet",
            unit: "g",
            metricValue: 200,
            divisionId: 1,
            ingredientAllergens: [
              {
                id: 27,
                ingredientId: 27,
                allergenId: 7,
                allergen: { id: 7, name: "Fish" },
              },
            ],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [
          { recipeId: 7, allergenId: 7, allergen: { id: 7, name: "Fish" } },
        ],
        recipeDietaryTags: [],
      },
      {
        amount: 100,
        ingredientId: 28,
        recipeId: 7,
        ingredients: [
          {
            id: 28,
            name: "Lemon",
            unit: "g",
            metricValue: 100,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 50,
        ingredientId: 29,
        recipeId: 7,
        ingredients: [
          {
            id: 29,
            name: "Butter",
            unit: "g",
            metricValue: 50,
            divisionId: 1,
            ingredientAllergens: [
              {
                id: 29,
                ingredientId: 29,
                allergenId: 4,
                allergen: { id: 4, name: "Dairy" },
              },
            ],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [
          { recipeId: 7, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
        ],
        recipeDietaryTags: [],
      },
    ],
    recipeAllergens: [
      { recipeId: 7, allergenId: 7, allergen: { id: 7, name: "Fish" } },
      { recipeId: 7, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
    ],
    recipeDietaryTags: [],
    userNotes: [],
  },

  {
    name: "Lentil Soup",
    id: 8,
    subDivisionId: 1,
    version: 1,
    costPrice: 2.9,
    salePrice: 7.5,
    RecipeIngredient: [
      {
        amount: 150,
        ingredientId: 30,
        recipeId: 8,
        ingredients: [
          {
            id: 30,
            name: "Lentils",
            unit: "g",
            metricValue: 150,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [
              {
                dietaryTagId: 1,
                ingredientId: 30,
                dietaryTag: { id: 1, name: "Vegan" },
              },
            ],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 100,
        ingredientId: 6,
        recipeId: 8,
        ingredients: [
          {
            id: 6,
            name: "Tomato",
            unit: "g",
            metricValue: 100,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 80,
        ingredientId: 19,
        recipeId: 8,
        ingredients: [
          {
            id: 19,
            name: "Carrots",
            unit: "g",
            metricValue: 80,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
    ],
    recipeAllergens: [],
    recipeDietaryTags: [
      { recipeId: 8, dietaryTagId: 1, dietaryTag: { id: 1, name: "Vegan" } },
    ],
    userNotes: [],
  },

  {
    name: "Pork Chops",
    id: 9,
    subDivisionId: 1,
    version: 1,
    costPrice: 4.8,
    salePrice: 12.0,
    RecipeIngredient: [
      {
        amount: 250,
        ingredientId: 31,
        recipeId: 9,
        ingredients: [
          {
            id: 31,
            name: "Pork Chop",
            unit: "g",
            metricValue: 250,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 20,
        ingredientId: 32,
        recipeId: 9,
        ingredients: [
          {
            id: 32,
            name: "Rosemary",
            unit: "g",
            metricValue: 20,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
    ],
    recipeAllergens: [],
    recipeDietaryTags: [],
    userNotes: [],
  },

  {
    name: "Fish and Chips",
    id: 10,
    subDivisionId: 1,
    version: 1,
    costPrice: 3.9,
    salePrice: 10,
    RecipeIngredient: [
      {
        amount: 180,
        ingredientId: 33,
        recipeId: 10,
        ingredients: [
          {
            id: 33,
            name: "Cod Fillet",
            unit: "g",
            metricValue: 180,
            divisionId: 1,
            ingredientAllergens: [
              {
                id: 33,
                ingredientId: 33,
                allergenId: 7,
                allergen: { id: 7, name: "Fish" },
              },
            ],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [
          { recipeId: 10, allergenId: 7, allergen: { id: 7, name: "Fish" } },
        ],
        recipeDietaryTags: [],
      },
      {
        amount: 200,
        ingredientId: 34,
        recipeId: 10,
        ingredients: [
          {
            id: 34,
            name: "Potato",
            unit: "g",
            metricValue: 200,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
    ],
    recipeAllergens: [
      { recipeId: 10, allergenId: 7, allergen: { id: 7, name: "Fish" } },
    ],
    recipeDietaryTags: [],
    userNotes: [],
  },

  {
    name: "Chicken Alfredo",
    id: 11,
    subDivisionId: 1,
    version: 1,
    costPrice: 2.6,
    salePrice: 7.0,
    RecipeIngredient: [
      {
        amount: 150,
        ingredientId: 4,
        recipeId: 11,
        ingredients: [
          {
            id: 4,
            name: "Chicken",
            unit: "g",
            metricValue: 150,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 200,
        ingredientId: 2,
        recipeId: 11,
        ingredients: [
          {
            id: 2,
            name: "Pasta",
            unit: "g",
            metricValue: 200,
            divisionId: 1,
            ingredientAllergens: [
              {
                id: 10,
                ingredientId: 2,
                allergenId: 1,
                allergen: { id: 1, name: "Gluten" },
              },
            ],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [
          { recipeId: 11, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
        ],
        recipeDietaryTags: [],
      },
      {
        amount: 100,
        ingredientId: 35,
        recipeId: 11,
        ingredients: [
          {
            id: 35,
            name: "Heavy Cream",
            unit: "ml",
            metricValue: 100,
            divisionId: 1,
            ingredientAllergens: [
              {
                id: 35,
                ingredientId: 35,
                allergenId: 4,
                allergen: { id: 4, name: "Dairy" },
              },
            ],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [
          { recipeId: 11, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
        ],
        recipeDietaryTags: [],
      },
    ],
    recipeAllergens: [
      { recipeId: 11, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
      { recipeId: 11, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
    ],
    recipeDietaryTags: [],
    userNotes: [],
  },

  {
    name: "Vegetable Lasagna",
    id: 12,
    subDivisionId: 1,
    version: 1,
    costPrice: 2.5,
    salePrice: 7.0,
    RecipeIngredient: [
      {
        amount: 200,
        ingredientId: 36,
        recipeId: 12,
        ingredients: [
          {
            id: 36,
            name: "Lasagna Sheets",
            unit: "g",
            metricValue: 200,
            divisionId: 1,
            ingredientAllergens: [
              {
                id: 36,
                ingredientId: 36,
                allergenId: 1,
                allergen: { id: 1, name: "Gluten" },
              },
            ],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [
          { recipeId: 12, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
        ],
        recipeDietaryTags: [],
      },
      {
        amount: 150,
        ingredientId: 37,
        recipeId: 12,
        ingredients: [
          {
            id: 37,
            name: "Ricotta Cheese",
            unit: "g",
            metricValue: 150,
            divisionId: 1,
            ingredientAllergens: [
              {
                id: 37,
                ingredientId: 37,
                allergenId: 4,
                allergen: { id: 4, name: "Dairy" },
              },
            ],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [
          { recipeId: 12, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
        ],
        recipeDietaryTags: [],
      },
      {
        amount: 100,
        ingredientId: 38,
        recipeId: 12,
        ingredients: [
          {
            id: 38,
            name: "Spinach",
            unit: "g",
            metricValue: 100,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
    ],
    recipeAllergens: [
      { recipeId: 12, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
      { recipeId: 12, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
    ],
    recipeDietaryTags: [
      {
        recipeId: 12,
        dietaryTagId: 2,
        dietaryTag: { id: 2, name: "Vegetarian" },
      },
    ],
    userNotes: [],
  },

  {
    name: "Shrimp Scampi",
    id: 13,
    subDivisionId: 1,
    version: 1,
    costPrice: 4.2,
    salePrice: 10.5,
    RecipeIngredient: [
      {
        amount: 180,
        ingredientId: 39,
        recipeId: 13,
        ingredients: [
          {
            id: 39,
            name: "Shrimp",
            unit: "g",
            metricValue: 180,
            divisionId: 1,
            ingredientAllergens: [
              {
                id: 39,
                ingredientId: 39,
                allergenId: 8,
                allergen: { id: 8, name: "Shellfish" },
              },
            ],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [
          {
            recipeId: 13,
            allergenId: 8,
            allergen: { id: 8, name: "Shellfish" },
          },
        ],
        recipeDietaryTags: [],
      },
      {
        amount: 10,
        ingredientId: 5,
        recipeId: 13,
        ingredients: [
          {
            id: 5,
            name: "Garlic",
            unit: "g",
            metricValue: 10,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 30,
        ingredientId: 29,
        recipeId: 13,
        ingredients: [
          {
            id: 29,
            name: "Butter",
            unit: "g",
            metricValue: 30,
            divisionId: 1,
            ingredientAllergens: [
              {
                id: 29,
                ingredientId: 29,
                allergenId: 4,
                allergen: { id: 4, name: "Dairy" },
              },
            ],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [
          { recipeId: 13, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
        ],
        recipeDietaryTags: [],
      },
    ],
    recipeAllergens: [
      { recipeId: 13, allergenId: 8, allergen: { id: 8, name: "Shellfish" } },
      { recipeId: 13, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
    ],
    recipeDietaryTags: [],
    userNotes: [],
  },

  {
    name: "Beef Stroganoff",
    id: 14,
    subDivisionId: 1,
    version: 1,
    costPrice: 3.7,
    salePrice: 9.5,
    RecipeIngredient: [
      {
        amount: 200,
        ingredientId: 40,
        recipeId: 14,
        ingredients: [
          {
            id: 40,
            name: "Beef Strips",
            unit: "g",
            metricValue: 200,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 100,
        ingredientId: 41,
        recipeId: 14,
        ingredients: [
          {
            id: 41,
            name: "Mushrooms",
            unit: "g",
            metricValue: 100,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 80,
        ingredientId: 42,
        recipeId: 14,
        ingredients: [
          {
            id: 42,
            name: "Sour Cream",
            unit: "ml",
            metricValue: 80,
            divisionId: 1,
            ingredientAllergens: [
              {
                id: 42,
                ingredientId: 42,
                allergenId: 4,
                allergen: { id: 4, name: "Dairy" },
              },
            ],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [
          { recipeId: 14, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
        ],
        recipeDietaryTags: [],
      },
    ],
    recipeAllergens: [
      { recipeId: 14, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
    ],
    recipeDietaryTags: [],
    userNotes: [],
  },

  {
    name: "Quinoa Salad",
    id: 15,
    subDivisionId: 1,
    version: 1,
    costPrice: 2.9,
    salePrice: 7.5,
    RecipeIngredient: [
      {
        amount: 150,
        ingredientId: 43,
        recipeId: 15,
        ingredients: [
          {
            id: 43,
            name: "Quinoa",
            unit: "g",
            metricValue: 150,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [
              {
                dietaryTagId: 1,
                ingredientId: 43,
                dietaryTag: { id: 1, name: "Vegan" },
              },
            ],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 80,
        ingredientId: 10,
        recipeId: 15,
        ingredients: [
          {
            id: 10,
            name: "Cucumber",
            unit: "g",
            metricValue: 80,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 60,
        ingredientId: 6,
        recipeId: 15,
        ingredients: [
          {
            id: 6,
            name: "Tomato",
            unit: "g",
            metricValue: 60,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
    ],
    recipeAllergens: [],
    recipeDietaryTags: [
      { recipeId: 15, dietaryTagId: 1, dietaryTag: { id: 1, name: "Vegan" } },
    ],
    userNotes: [],
  },

  {
    name: "Stuffed Bell Peppers",
    id: 16,
    subDivisionId: 1,
    version: 1,
    costPrice: 2.8,
    salePrice: 7.0,
    RecipeIngredient: [
      {
        amount: 200,
        ingredientId: 17,
        recipeId: 16,
        ingredients: [
          {
            id: 17,
            name: "Bell Pepper",
            unit: "g",
            metricValue: 200,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 100,
        ingredientId: 13,
        recipeId: 16,
        ingredients: [
          {
            id: 13,
            name: "Ground Beef",
            unit: "g",
            metricValue: 100,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 80,
        ingredientId: 16,
        recipeId: 16,
        ingredients: [
          {
            id: 16,
            name: "Rice",
            unit: "g",
            metricValue: 80,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
    ],
    recipeAllergens: [],
    recipeDietaryTags: [],
    userNotes: [],
  },

  {
    name: "Chicken Fajitas",
    id: 17,
    subDivisionId: 1,
    version: 1,
    costPrice: 3.1,
    salePrice: 8,
    RecipeIngredient: [
      {
        amount: 180,
        ingredientId: 4,
        recipeId: 17,
        ingredients: [
          {
            id: 4,
            name: "Chicken",
            unit: "g",
            metricValue: 180,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 100,
        ingredientId: 17,
        recipeId: 17,
        ingredients: [
          {
            id: 17,
            name: "Bell Pepper",
            unit: "g",
            metricValue: 100,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 4,
        ingredientId: 44,
        recipeId: 17,
        ingredients: [
          {
            id: 44,
            name: "Tortillas",
            unit: "pcs",
            metricValue: 4,
            divisionId: 1,
            ingredientAllergens: [
              {
                id: 44,
                ingredientId: 44,
                allergenId: 1,
                allergen: { id: 1, name: "Gluten" },
              },
            ],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [
          { recipeId: 17, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
        ],
        recipeDietaryTags: [],
      },
    ],
    recipeAllergens: [
      { recipeId: 17, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
    ],
    recipeDietaryTags: [],
    userNotes: [],
  },

  {
    name: "Mushroom Risotto",
    id: 18,
    subDivisionId: 1,
    version: 1,
    costPrice: 2.6,
    salePrice: 7.0,
    RecipeIngredient: [
      {
        amount: 150,
        ingredientId: 45,
        recipeId: 18,
        ingredients: [
          {
            id: 45,
            name: "Arborio Rice",
            unit: "g",
            metricValue: 150,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 120,
        ingredientId: 41,
        recipeId: 18,
        ingredients: [
          {
            id: 41,
            name: "Mushrooms",
            unit: "g",
            metricValue: 120,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 50,
        ingredientId: 3,
        recipeId: 18,
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
                allergenId: 4,
                allergen: { id: 4, name: "Dairy" },
              },
            ],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [
          { recipeId: 18, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
        ],
        recipeDietaryTags: [],
      },
    ],
    recipeAllergens: [
      { recipeId: 18, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
    ],
    recipeDietaryTags: [
      {
        recipeId: 18,
        dietaryTagId: 2,
        dietaryTag: { id: 2, name: "Vegetarian" },
      },
    ],
    userNotes: [],
  },

  {
    name: "Pasta Primavera",
    id: 19,
    subDivisionId: 1,
    version: 1,
    costPrice: 3.2,
    salePrice: 8,
    RecipeIngredient: [
      {
        amount: 200,
        ingredientId: 2,
        recipeId: 19,
        ingredients: [
          {
            id: 2,
            name: "Pasta",
            unit: "g",
            metricValue: 200,
            divisionId: 1,
            ingredientAllergens: [
              {
                id: 10,
                ingredientId: 2,
                allergenId: 1,
                allergen: { id: 1, name: "Gluten" },
              },
            ],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [
          { recipeId: 19, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
        ],
        recipeDietaryTags: [],
      },
      {
        amount: 100,
        ingredientId: 17,
        recipeId: 19,
        ingredients: [
          {
            id: 17,
            name: "Bell Pepper",
            unit: "g",
            metricValue: 100,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 80,
        ingredientId: 46,
        recipeId: 19,
        ingredients: [
          {
            id: 46,
            name: "Zucchini",
            unit: "g",
            metricValue: 80,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 60,
        ingredientId: 6,
        recipeId: 19,
        ingredients: [
          {
            id: 6,
            name: "Tomato",
            unit: "g",
            metricValue: 60,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
    ],
    recipeAllergens: [
      { recipeId: 19, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
    ],
    recipeDietaryTags: [
      {
        recipeId: 19,
        dietaryTagId: 2,
        dietaryTag: { id: 2, name: "Vegetarian" },
      },
    ],
    userNotes: [],
  },

  {
    name: "BBQ Ribs",
    id: 20,
    subDivisionId: 1,
    version: 1,
    costPrice: 4.2,
    salePrice: 12,
    RecipeIngredient: [
      {
        amount: 300,
        ingredientId: 47,
        recipeId: 20,
        ingredients: [
          {
            id: 47,
            name: "Pork Ribs",
            unit: "g",
            metricValue: 300,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
      {
        amount: 80,
        ingredientId: 48,
        recipeId: 20,
        ingredients: [
          {
            id: 48,
            name: "BBQ Sauce",
            unit: "ml",
            metricValue: 80,
            divisionId: 1,
            ingredientAllergens: [],
            ingredientDietaryTags: [],
          },
        ],
        recipeAllergens: [],
        recipeDietaryTags: [],
      },
    ],
    recipeAllergens: [],
    recipeDietaryTags: [],
    userNotes: [],
  },
];

export const AltDummyProducts: Recipe[] = [
  {
    name: "Special Starter",
    id: 21,
    subDivisionId: 1,
    version: 1,
    costPrice: 1.5,
    salePrice: 4.0,
    RecipeIngredient: [],
    recipeAllergens: [],
    recipeDietaryTags: [],
    userNotes: [],
  },
  {
    name: "Special Mains",
    id: 22,
    subDivisionId: 1,
    version: 1,
    costPrice: 2.0,
    salePrice: 5.0,
    RecipeIngredient: [],
    recipeAllergens: [],
    recipeDietaryTags: [],
    userNotes: [],
  },
  {
    name: "Special Burger",
    id: 23,
    subDivisionId: 1,
    version: 1,
    costPrice: 2.5,
    salePrice: 6.0,
    RecipeIngredient: [],
    recipeAllergens: [],
    recipeDietaryTags: [],
    userNotes: [],
  },
  {
    name: "Steak Dessert",
    id: 24,
    subDivisionId: 1,
    version: 1,
    costPrice: 1.8,
    salePrice: 4.5,
    RecipeIngredient: [],
    recipeAllergens: [],
    recipeDietaryTags: [],
    userNotes: [],
  },
];

//   {
//     name: "Spaghetti Bolognese",
//     id: 1,
//     subDivisionId: 1,
//     version: 1,
//     costPrice: 2.8,
//     salePrice: 7.0,
//     RecipeIngredient: [
//       {
//         amount: 200,
//         ingredientId: 2,
//         recipeId: 1,
//         ingredients: [
//           {
//             id: 2,
//             name: "Pasta",
//             unit: "g",
//             metricValue: 200,
//             divisionId: 1,
//             ingredientAllergens: [
//               {
//                 id: 10,
//                 ingredientId: 2,
//                 allergenId: 1,
//                 allergen: { id: 1, name: "Gluten" },
//               },
//             ],
//             ingredientDietaryTags: [],
//           },
//         ],
//         recipeAllergens: [
//           { recipeId: 1, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
//         ],
//         recipeDietaryTags: [],
//       },
//       {
//         amount: 150,
//         ingredientId: 13,
//         recipeId: 1,
//         ingredients: [
//           {
//             id: 13,
//             name: "Ground Beef",
//             unit: "g",
//             metricValue: 150,
//             divisionId: 1,
//             ingredientAllergens: [],
//             ingredientDietaryTags: [],
//           },
//         ],
//         recipeAllergens: [],
//         recipeDietaryTags: [],
//       },
//       {
//         amount: 100,
//         ingredientId: 6,
//         recipeId: 1,
//         ingredients: [
//           {
//             id: 6,
//             name: "Tomato",
//             unit: "g",
//             metricValue: 100,
//             divisionId: 1,
//             ingredientAllergens: [],
//             ingredientDietaryTags: [
//               {
//                 dietaryTagId: 1,
//                 ingredientId: 6,
//                 dietaryTag: { id: 1, name: "Vegan" },
//               },
//             ],
//           },
//         ],
//         recipeAllergens: [],
//         recipeDietaryTags: [],
//       },
//       {
//         amount: 50,
//         ingredientId: 3,
//         recipeId: 1,
//         ingredients: [
//           {
//             id: 3,
//             name: "Parmesan Cheese",
//             unit: "g",
//             metricValue: 50,
//             divisionId: 1,
//             ingredientAllergens: [
//               {
//                 id: 14,
//                 ingredientId: 3,
//                 allergenId: 4,
//                 allergen: { id: 4, name: "Dairy" },
//               },
//             ],
//             ingredientDietaryTags: [
//               {
//                 dietaryTagId: 2,
//                 ingredientId: 3,
//                 dietaryTag: { id: 2, name: "Vegetarian" },
//               },
//             ],
//           },
//         ],
//         recipeAllergens: [
//           { recipeId: 1, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
//         ],
//         recipeDietaryTags: [],
//       },
//     ],
//     recipeAllergens: [
//       { recipeId: 1, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
//       { recipeId: 1, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
//     ],
//     recipeDietaryTags: [],
//     userNotes: [],
//   },
//   {
//     name: "Chicken Curry",
//     id: 2,
//     subDivisionId: 1,
//     version: 1,
//     costPrice: 3.1,
//     salePrice: 8.0,
//     RecipeIngredient: [
//       {
//         amount: 200,
//         ingredientId: 4,
//         recipeId: 2,
//         ingredients: [
//           {
//             id: 4,
//             name: "Chicken",
//             unit: "g",
//             metricValue: 200,
//             divisionId: 1,
//             ingredientAllergens: [],
//             ingredientDietaryTags: [],
//           },
//         ],
//         recipeAllergens: [],
//         recipeDietaryTags: [],
//       },
//       {
//         amount: 50,
//         ingredientId: 14,
//         recipeId: 2,
//         ingredients: [
//           {
//             id: 14,
//             name: "Curry Powder",
//             unit: "g",
//             metricValue: 50,
//             divisionId: 1,
//             ingredientAllergens: [],
//             ingredientDietaryTags: [
//               {
//                 dietaryTagId: 1,
//                 ingredientId: 14,
//                 dietaryTag: { id: 1, name: "Vegan" },
//               },
//             ],
//           },
//         ],
//         recipeAllergens: [],
//         recipeDietaryTags: [],
//       },
//       {
//         amount: 100,
//         ingredientId: 15,
//         recipeId: 2,
//         ingredients: [
//           {
//             id: 15,
//             name: "Coconut Milk",
//             unit: "ml",
//             metricValue: 100,
//             divisionId: 1,
//             ingredientAllergens: [],
//             ingredientDietaryTags: [
//               {
//                 dietaryTagId: 1,
//                 ingredientId: 15,
//                 dietaryTag: { id: 1, name: "Vegan" },
//               },
//             ],
//           },
//         ],
//         recipeAllergens: [],
//         recipeDietaryTags: [],
//       },
//       {
//         amount: 80,
//         ingredientId: 16,
//         recipeId: 2,
//         ingredients: [
//           {
//             id: 16,
//             name: "Rice",
//             unit: "g",
//             metricValue: 80,
//             divisionId: 1,
//             ingredientAllergens: [],
//             ingredientDietaryTags: [
//               {
//                 dietaryTagId: 1,
//                 ingredientId: 16,
//                 dietaryTag: { id: 1, name: "Vegan" },
//               },
//             ],
//           },
//         ],
//         recipeAllergens: [],
//         recipeDietaryTags: [],
//       },
//     ],
//     recipeAllergens: [],
//     recipeDietaryTags: [],
//     userNotes: [],
//   },
//   {
//     name: "Vegetable Stir Fry",
//     id: 3,
//     subDivisionId: 1,
//     version: 1,
//     costPrice: 2.2,
//     salePrice: 6.0,
//     RecipeIngredient: [
//       {
//         amount: 100,
//         ingredientId: 17,
//         recipeId: 3,
//         ingredients: [
//           {
//             id: 17,
//             name: "Bell Pepper",
//             unit: "g",
//             metricValue: 100,
//             divisionId: 1,
//             ingredientAllergens: [],
//             ingredientDietaryTags: [
//               {
//                 dietaryTagId: 1,
//                 ingredientId: 17,
//                 dietaryTag: { id: 1, name: "Vegan" },
//               },
//             ],
//           },
//         ],
//         recipeAllergens: [],
//         recipeDietaryTags: [],
//       },
//       {
//         amount: 80,
//         ingredientId: 18,
//         recipeId: 3,
//         ingredients: [
//           {
//             id: 18,
//             name: "Broccoli",
//             unit: "g",
//             metricValue: 80,
//             divisionId: 1,
//             ingredientAllergens: [],
//             ingredientDietaryTags: [
//               {
//                 dietaryTagId: 1,
//                 ingredientId: 18,
//                 dietaryTag: { id: 1, name: "Vegan" },
//               },
//             ],
//           },
//         ],
//         recipeAllergens: [],
//         recipeDietaryTags: [],
//       },
//       {
//         amount: 70,
//         ingredientId: 19,
//         recipeId: 3,
//         ingredients: [
//           {
//             id: 19,
//             name: "Carrots",
//             unit: "g",
//             metricValue: 70,
//             divisionId: 1,
//             ingredientAllergens: [],
//             ingredientDietaryTags: [
//               {
//                 dietaryTagId: 1,
//                 ingredientId: 19,
//                 dietaryTag: { id: 1, name: "Vegan" },
//               },
//             ],
//           },
//         ],
//         recipeAllergens: [],
//         recipeDietaryTags: [],
//       },
//       {
//         amount: 30,
//         ingredientId: 20,
//         recipeId: 3,
//         ingredients: [
//           {
//             id: 20,
//             name: "Soy Sauce",
//             unit: "ml",
//             metricValue: 30,
//             divisionId: 1,
//             ingredientAllergens: [
//               {
//                 id: 20,
//                 ingredientId: 20,
//                 allergenId: 6,
//                 allergen: { id: 6, name: "Soy" },
//               },
//             ],
//             ingredientDietaryTags: [
//               {
//                 dietaryTagId: 1,
//                 ingredientId: 20,
//                 dietaryTag: { id: 1, name: "Vegan" },
//               },
//             ],
//           },
//         ],
//         recipeAllergens: [
//           { recipeId: 3, allergenId: 6, allergen: { id: 6, name: "Soy" } },
//         ],
//         recipeDietaryTags: [],
//       },
//     ],
//     recipeAllergens: [
//       { recipeId: 3, allergenId: 6, allergen: { id: 6, name: "Soy" } },
//     ],
//     recipeDietaryTags: [
//       { recipeId: 3, dietaryTagId: 1, dietaryTag: { id: 1, name: "Vegan" } },
//     ],
//     userNotes: [],
//   },
//   {
//     name: "Beef Tacos",
//     id: 4,
//     subDivisionId: 1,
//     version: 1,
//     costPrice: 3.5,
//     salePrice: 9,
//     RecipeIngredient: [
//       {
//         amount: 150,
//         ingredientId: 13,
//         recipeId: 4,
//         ingredients: [
//           {
//             id: 13,
//             name: "Ground Beef",
//             unit: "g",
//             metricValue: 150,
//             divisionId: 1,
//             ingredientAllergens: [],
//             ingredientDietaryTags: [],
//           },
//         ],
//         recipeAllergens: [],
//         recipeDietaryTags: [],
//       },
//       {
//         amount: 3,
//         ingredientId: 21,
//         recipeId: 4,
//         ingredients: [
//           {
//             id: 21,
//             name: "Taco Shells",
//             unit: "pcs",
//             metricValue: 3,
//             divisionId: 1,
//             ingredientAllergens: [
//               {
//                 id: 21,
//                 ingredientId: 21,
//                 allergenId: 1,
//                 allergen: { id: 1, name: "Gluten" },
//               },
//             ],
//             ingredientDietaryTags: [],
//           },
//         ],
//         recipeAllergens: [
//           { recipeId: 4, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
//         ],
//         recipeDietaryTags: [],
//       },
//       {
//         amount: 50,
//         ingredientId: 22,
//         recipeId: 4,
//         ingredients: [
//           {
//             id: 22,
//             name: "Cheddar Cheese",
//             unit: "g",
//             metricValue: 50,
//             divisionId: 1,
//             ingredientAllergens: [
//               {
//                 id: 22,
//                 ingredientId: 22,
//                 allergenId: 4,
//                 allergen: { id: 4, name: "Dairy" },
//               },
//             ],
//             ingredientDietaryTags: [
//               {
//                 dietaryTagId: 2,
//                 ingredientId: 22,
//                 dietaryTag: { id: 2, name: "Vegetarian" },
//               },
//             ],
//           },
//         ],
//         recipeAllergens: [
//           { recipeId: 4, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
//         ],
//         recipeDietaryTags: [],
//       },
//       {
//         amount: 30,
//         ingredientId: 9,
//         recipeId: 4,
//         ingredients: [
//           {
//             id: 9,
//             name: "Lettuce",
//             unit: "g",
//             metricValue: 30,
//             divisionId: 1,
//             ingredientAllergens: [],
//             ingredientDietaryTags: [
//               {
//                 dietaryTagId: 1,
//                 ingredientId: 9,
//                 dietaryTag: { id: 1, name: "Vegan" },
//               },
//             ],
//           },
//         ],
//         recipeAllergens: [],
//         recipeDietaryTags: [],
//       },
//     ],
//     recipeAllergens: [
//       { recipeId: 4, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
//       { recipeId: 4, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
//     ],
//     recipeDietaryTags: [],
//     userNotes: [],
//   },
//   {
//     name: "Caesar Salad",
//     id: 5,
//     subDivisionId: 1,
//     version: 1,
//     costPrice: 2.7,
//     salePrice: 7,
//     RecipeIngredient: [
//       {
//         amount: 150,
//         ingredientId: 9,
//         recipeId: 5,
//         ingredients: [
//           {
//             id: 9,
//             name: "Lettuce",
//             unit: "g",
//             metricValue: 150,
//             divisionId: 1,
//             ingredientAllergens: [],
//             ingredientDietaryTags: [
//               {
//                 dietaryTagId: 1,
//                 ingredientId: 9,
//                 dietaryTag: { id: 1, name: "Vegan" },
//               },
//             ],
//           },
//         ],
//         recipeAllergens: [],
//         recipeDietaryTags: [],
//       },
//       {
//         amount: 60,
//         ingredientId: 3,
//         recipeId: 5,
//         ingredients: [
//           {
//             id: 3,
//             name: "Parmesan Cheese",
//             unit: "g",
//             metricValue: 60,
//             divisionId: 1,
//             ingredientAllergens: [
//               {
//                 id: 14,
//                 ingredientId: 3,
//                 allergenId: 4,
//                 allergen: { id: 4, name: "Dairy" },
//               },
//             ],
//             ingredientDietaryTags: [
//               {
//                 dietaryTagId: 2,
//                 ingredientId: 3,
//                 dietaryTag: { id: 2, name: "Vegetarian" },
//               },
//             ],
//           },
//         ],
//         recipeAllergens: [
//           { recipeId: 5, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
//         ],
//         recipeDietaryTags: [],
//       },
//       {
//         amount: 50,
//         ingredientId: 23,
//         recipeId: 5,
//         ingredients: [
//           {
//             id: 23,
//             name: "Croutons",
//             unit: "g",
//             metricValue: 50,
//             divisionId: 1,
//             ingredientAllergens: [
//               {
//                 id: 23,
//                 ingredientId: 23,
//                 allergenId: 1,
//                 allergen: { id: 1, name: "Gluten" },
//               },
//             ],
//             ingredientDietaryTags: [],
//           },
//         ],
//         recipeAllergens: [
//           { recipeId: 5, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
//         ],
//         recipeDietaryTags: [],
//       },
//       {
//         amount: 40,
//         ingredientId: 24,
//         recipeId: 5,
//         ingredients: [
//           {
//             id: 24,
//             name: "Caesar Dressing",
//             unit: "ml",
//             metricValue: 40,
//             divisionId: 1,
//             ingredientAllergens: [
//               {
//                 id: 24,
//                 ingredientId: 24,
//                 allergenId: 5,
//                 allergen: { id: 5, name: "Eggs" },
//               },
//             ],
//             ingredientDietaryTags: [],
//           },
//         ],
//         recipeAllergens: [
//           { recipeId: 5, allergenId: 5, allergen: { id: 5, name: "Eggs" } },
//         ],
//         recipeDietaryTags: [],
//       },
//     ],
//     recipeAllergens: [
//       { recipeId: 5, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
//       { recipeId: 5, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
//       { recipeId: 5, allergenId: 5, allergen: { id: 5, name: "Eggs" } },
//     ],
//     recipeDietaryTags: [
//       { recipeId: 5, dietaryTagId: 2, dietaryTag: { id: 2, name: "Vegetarian" } },
//     ],
//     userNotes: [],
//   },
//   {
//     name: "Margherita Pizza",
//     id: 6,
//     subDivisionId: 1,
//     version: 1,
//     costPrice: 2.9,
//     salePrice: 7.5,
//     RecipeIngredient: [
//       {
//         amount: 250,
//         ingredientId: 25,
//         recipeId: 6,
//         ingredients: [
//           {
//             id: 25,
//             name: "Pizza Dough",
//             unit: "g",
//             metricValue: 250,
//             divisionId: 1,
//             ingredientAllergens: [
//               {
//                 id: 25,
//                 ingredientId: 25,
//                 allergenId: 1,
//                 allergen: { id: 1, name: "Gluten" },
//               },
//             ],
//             ingredientDietaryTags: [
//               {
//                 dietaryTagId: 2,
//                 ingredientId: 25,
//                 dietaryTag: { id: 2, name: "Vegetarian" },
//               },
//             ],
//           },
//         ],
//         recipeAllergens: [
//           { recipeId: 6, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
//         ],
//         recipeDietaryTags: [],
//       },
//       {
//         amount: 100,
//         ingredientId: 6,
//         recipeId: 6,
//         ingredients: [
//           {
//             id: 6,
//             name: "Tomato",
//             unit: "g",
//             metricValue: 100,
//             divisionId: 1,
//             ingredientAllergens: [],
//             ingredientDietaryTags: [
//               {
//                 dietaryTagId: 1,
//                 ingredientId: 6,
//                 dietaryTag: { id: 1, name: "Vegan" },
//               },
//             ],
//           },
//         ],
//         recipeAllergens: [],
//         recipeDietaryTags: [],
//       },
//       {
//         amount: 120,
//         ingredientId: 7,
//         recipeId: 6,
//         ingredients: [
//           {
//             id: 7,
//             name: "Mozzarella",
//             unit: "g",
//             metricValue: 120,
//             divisionId: 1,
//             ingredientAllergens: [
//               {
//                 id: 26,
//                 ingredientId: 7,
//                 allergenId: 4,
//                 allergen: { id: 4, name: "Dairy" },
//               },
//             ],
//             ingredientDietaryTags: [
//               {
//                 dietaryTagId: 2,
//                 ingredientId: 7,
//                 dietaryTag: { id: 2, name: "Vegetarian" },
//               },
//             ],
//           },
//         ],
//         recipeAllergens: [
//           { recipeId: 6, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
//         ],
//         recipeDietaryTags: [],
//       },
//       {
//         amount: 10,
//         ingredientId: 26,
//         recipeId: 6,
//         ingredients: [
//           {
//             id: 26,
//             name: "Basil",
//             unit: "g",
//             metricValue: 10,
//             divisionId: 1,
//             ingredientAllergens: [],
//             ingredientDietaryTags: [
//               {
//                 dietaryTagId: 1,
//                 ingredientId: 26,
//                 dietaryTag: { id: 1, name: "Vegan" },
//               },
//             ],
//           },
//         ],
//         recipeAllergens: [],
//         recipeDietaryTags: [],
//       },
//     ],
//     recipeAllergens: [
//       { recipeId: 6, allergenId: 1, allergen: { id: 1, name: "Gluten" } },
//       { recipeId: 6, allergenId: 4, allergen: { id: 4, name: "Dairy" } },
//     ],
//     recipeDietaryTags: [
//       { recipeId: 6, dietaryTagId: 2, dietaryTag: { id: 2, name: "Vegetarian" } },
//     ],
//     userNotes: [],
//   },
//   {
//     name: "Grilled Salmon",
//     id: 7,
//     subDivisionId: 1,
//     version: 1,
//     costPrice: 4.8,
//     salePrice: 12,
//     RecipeIngredient: [],
//     recipeAllergens: [],
//     recipeDietaryTags: [],
//     userNotes: [],
//   },
//   {
//     name: "Lentil Soup",
//     id: 8,
//     subDivisionId: 1,
//     version: 1,
//     costPrice: 2.9,
//     salePrice: 7.5,
//     RecipeIngredient: [],
//     recipeAllergens: [],
//     recipeDietaryTags: [],
//     userNotes: [],
//   },
//   {
//     name: "Pork Chops",
//     id: 9,
//     subDivisionId: 1,
//     version: 1,
//     costPrice: 4.8,
//     salePrice: 12.0,
//     RecipeIngredient: [],
//     recipeAllergens: [],
//     recipeDietaryTags: [],
//     userNotes: [],
//   },
//   {
//     name: "Fish and Chips",
//     id: 10,
//     subDivisionId: 1,
//     version: 1,
//     costPrice: 3.9,
//     salePrice: 10,
//     RecipeIngredient: [],
//     recipeAllergens: [],
//     recipeDietaryTags: [],
//     userNotes: [],
//   },
//   {
//     name: "Chicken Alfredo",
//     id: 11,
//     subDivisionId: 1,
//     version: 1,
//     costPrice: 2.6,
//     salePrice: 7.0,
//     RecipeIngredient: [],
//     recipeAllergens: [],
//     recipeDietaryTags: [],
//     userNotes: [],
//   },
//   {
//     name: "Vegetable Lasagna",
//     id: 12,
//     subDivisionId: 1,
//     version: 1,
//     costPrice: 2.5,
//     salePrice: 7.0,
//     RecipeIngredient: [],
//     recipeAllergens: [],
//     recipeDietaryTags: [],
//     userNotes: [],
//   },
//   {
//     name: "Shrimp Scampi",
//     id: 13,
//     subDivisionId: 1,
//     version: 1,
//     costPrice: 4.2,
//     salePrice: 10.5,
//     RecipeIngredient: [],
//     recipeAllergens: [],
//     recipeDietaryTags: [],
//     userNotes: [],
//   },
//   {
//     name: "Beef Stroganoff",
//     id: 14,
//     subDivisionId: 1,
//     version: 1,
//     costPrice: 3.7,
//     salePrice: 9.5,
//     RecipeIngredient: [],
//     recipeAllergens: [],
//     recipeDietaryTags: [],
//     userNotes: [],
//   },
//   {
//     name: "Quinoa Salad",
//     id: 15,
//     subDivisionId: 1,
//     version: 1,
//     costPrice: 2.9,
//     salePrice: 7.5,
//     RecipeIngredient: [],
//     recipeAllergens: [],
//     recipeDietaryTags: [],
//     userNotes: [],
//   },
//   {
//     name: "Stuffed Bell Peppers",
//     id: 16,
//     subDivisionId: 1,
//     version: 1,
//     costPrice: 2.8,
//     salePrice: 7.0,
//     RecipeIngredient: [],
//     recipeAllergens: [],
//     recipeDietaryTags: [],
//     userNotes: [],
//   },
//   {
//     name: "Chicken Fajitas",
//     id: 17,
//     subDivisionId: 1,
//     version: 1,
//     costPrice: 3.1,
//     salePrice: 8,
//     RecipeIngredient: [],
//     recipeAllergens: [],
//     recipeDietaryTags: [],
//     userNotes: [],
//   },
//   {
//     name: "Mushroom Risotto",
//     id: 18,
//     subDivisionId: 1,
//     version: 1,
//     costPrice: 2.6,
//     salePrice: 7.0,
//     RecipeIngredient: [],
//     recipeAllergens: [],
//     recipeDietaryTags: [],
//     userNotes: [],
//   },
//   {
//     name: "Pasta Primavera",
//     id: 19,
//     subDivisionId: 1,
//     version: 1,
//     costPrice: 3.2,
//     salePrice: 8,
//     RecipeIngredient: [],
//     recipeAllergens: [],
//     recipeDietaryTags: [],
//     userNotes: [],
//   },
//   {
//     name: "BBQ Ribs",
//     id: 20,
//     subDivisionId: 1,
//     version: 1,
//     costPrice: 4.2,
//     salePrice: 12,
//     RecipeIngredient: [],
//     recipeAllergens: [],
//     recipeDietaryTags: [],
//     userNotes: [],
//   },
// ];
