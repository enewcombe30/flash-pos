import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../types/recipeTypes";

interface OrdersState {
  items: Recipe[];
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
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    removeAllItems(state, action: PayloadAction<Recipe>) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    // ...other reducers
  },
});

export const { addItem, removeItem, removeAllItems } = orderSlice.actions;
export default orderSlice.reducer;
