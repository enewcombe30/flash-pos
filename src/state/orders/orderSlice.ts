import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Recipe } from "../../types/recipeTypes";

const initialState: Recipe[] = [];

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Recipe>) => {
      state.push({
        ...action.payload,
        orderItemId: uuidv4(),
      });
    },
    removeItem: (state, action: PayloadAction<Recipe>) => {
      return state.filter(
        (item) => item.orderItemId !== action.payload.orderItemId
      );
    },
  },
});

export const { addItem, removeItem } = orderSlice.actions;

export default orderSlice.reducer;
