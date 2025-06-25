import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../types/recipeTypes";
const initialState: Recipe[] = [];

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Recipe>) => {
      state.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<Recipe>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem } = orderSlice.actions;

export default orderSlice.reducer;
