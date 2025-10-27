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
    removeItem(state, action: PayloadAction<Recipe>) {
      // Remove first matching instance
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items.splice(index, 1);
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

export const { addItem, removeItem, removeAllOfItem, clearOrder } =
  orderSlice.actions;
export default orderSlice.reducer;
