import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../types/recipeTypes";

interface OrdersState {
  items: Recipe[]; // Store each recipe instance separately
  selectedItem: Recipe | null;
}

const initialState: OrdersState = {
  items: [],
  selectedItem: null,
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
    setSelectedItem(
      state,
      action: PayloadAction<{ item: Recipe; index: number }>
    ) {
      state.selectedItem =
        action.payload.item && action.payload.index !== -1
          ? action.payload.item
          : null;
    },
    clearSelection(state) {
      state.selectedItem = null;
    },
  },
});

export const {
  addItem,
  removeItem,
  removeAllOfItem,
  clearOrder,
  updateItem,
  setSelectedItem,
  clearSelection,
} = orderSlice.actions;
export default orderSlice.reducer;
