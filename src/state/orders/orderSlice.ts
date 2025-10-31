import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../types/recipeTypes";

interface OrdersState {
  items: Recipe[]; // Store each recipe instance separately
}

const initialState: OrdersState = {
  items: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Recipe>) {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1);
    },
    updateItem(
      state,
      action: PayloadAction<{ index: number; updatedRecipe: Recipe }>
    ) {
      const { index, updatedRecipe } = action.payload;
      if (state.items[index]) {
        state.items[index] = updatedRecipe;
      }
    },
    removeAllOfItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearOrder(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, removeAllOfItem, clearOrder, updateItem } =
  orderSlice.actions;
export default orderSlice.reducer;
