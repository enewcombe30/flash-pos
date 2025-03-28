import { configureStore } from "@reduxjs/toolkit";
import OrderReducer from "./orders/orderSlice";
import CounterReducer from "./counter/CounterSlice";

export const store = configureStore({
  reducer: {
    orders: OrderReducer,
    counter: CounterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
