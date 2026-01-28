import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecipeBase, Recipe } from "../../types/recipeTypes";

interface OrdersState {
  items: Recipe[]; // Store each recipe instance separately
  selectedItem: Recipe;
}

const initialState: OrdersState = {
  items: [],
  selectedItem: {} as Recipe,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<RecipeBase>) {
      // Transform RecipeBase to Recipe by adding orderItemId and other required fields
      const recipeWithOrderId: Recipe = {
        ...action.payload,
        orderItemId: crypto.randomUUID(),
        userNotes: [],
        assignedAllergies: [],
      };
      state.items.push(recipeWithOrderId);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1);
    },
    updateItem(
      state,
      action: PayloadAction<{ index: number; updatedRecipe: Recipe }>,
    ) {
      const { index, updatedRecipe } = action.payload;
      if (state.items[index]) {
        state.items[index] = updatedRecipe;
      }
    },
    removeAllOfItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(
        (item: Recipe) => item.id !== action.payload,
      );
    },
    clearOrder(state) {
      state.items = [];
    },
    setSelectedItem(
      state,
      action: PayloadAction<{ item: Recipe; index: number }>,
    ) {
      state.selectedItem =
        action.payload.item && action.payload.index !== -1
          ? action.payload.item
          : ({} as Recipe);
    },
    clearSelection(state) {
      state.selectedItem = {} as Recipe;
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
