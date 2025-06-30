import { Recipe } from "./recipeTypes";

export type Order = {
  orderList: Recipe[];
};

export type OrderItem = {
  item: Recipe;
  orderItemId: string;
};
