import { configureStore } from "@reduxjs/toolkit";
import OrderReducer from "./orders/orderSlice";
import CounterReducer from "./counter/CounterSlice";
import LoginReducer from "./login/loginSlice";

export const store = configureStore({
  reducer: {
    orders: OrderReducer,
    counter: CounterReducer,
    login: LoginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
