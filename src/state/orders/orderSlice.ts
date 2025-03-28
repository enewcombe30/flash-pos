import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../../types/orderTypes";
import { Recipe } from "../../types/recipeTypes";

const initialState: Order = {
  orderList: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Recipe>) => {
      state.orderList.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<Recipe>) => {
      state.orderList.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem } = orderSlice.actions;

export default orderSlice.reducer;
